<script setup lang="ts">
const route = useRoute()

const locale = computed<'zh' | 'en'>(() =>
	route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'zh',
)

/** 计算目标语言的对应页面路径：文章与镜像页（link/archive/theme）成对，其余页面回语言首页 */
function counterpart(target: 'zh' | 'en') {
	const mirrorable = /^\/(\d{4}\/|link\/?$|archive\/?$|theme\/?$)/
	if (target === 'en') {
		if (route.path === '/')
			return '/en'
		return mirrorable.test(route.path) ? `/en${route.path}` : '/en'
	}
	if (route.path === '/en')
		return '/'
	const enPath = route.path.replace(/^\/en/, '')
	return mirrorable.test(enPath) ? enPath : '/'
}

function switchTo(target: 'zh' | 'en') {
	if (target !== locale.value)
		navigateTo(counterpart(target))
}

// 空闲时预取对译页数据包，切换时客户端路由原地渲染、零等待
onMounted(() => {
	const other = counterpart(locale.value === 'zh' ? 'en' : 'zh')
	setTimeout(() => {
		fetch(`${other}/_payload.json`).catch(() => {})
	}, 1200)
})
</script>

<template>
<div class="language-toggle">
	<button
		:class="{ active: locale === 'zh' }"
		aria-label="切换到中文"
		v-tip="'中文'"
		@click="switchTo('zh')"
	>
		中
	</button>
	<button
		:class="{ active: locale === 'en' }"
		aria-label="Switch to English"
		v-tip="'English'"
		@click="switchTo('en')"
	>
		EN
	</button>
</div>
</template>

<style lang="scss" scoped>
.language-toggle {
	display: flex;
	gap: 3px;
	width: fit-content;
	margin: 0 auto;
	padding: 2px;
	border: 1px solid var(--c-border);
	border-radius: 1rem;
	background-color: var(--c-bg-2);

	> button {
		min-width: 2.6em;
		padding: 4px 0.6rem;
		border-radius: 1rem;
		font-size: 0.9em;
		transition: all 0.1s;

		&:hover {
			background-color: var(--c-bg-soft);
			color: var(--c-text-1);
		}

		&.active {
			box-shadow: var(--box-shadow-2);
			background-color: var(--ld-bg-card);
			color: var(--c-text-1);
			cursor: auto;
		}
	}
}
</style>
