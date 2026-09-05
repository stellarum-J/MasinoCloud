<script setup lang="ts">
const route = useRoute()

const locale = computed<'zh' | 'en'>(() =>
	route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'zh',
)

/** 计算目标语言的对应页面路径（文章 ↔ 对译文章；其余页面 ↔ 对应语言首页） */
function counterpart(target: 'zh' | 'en') {
	// 文章路径形如 /2026/foo 或 /en/2026/foo，存在镜像；其余页面切换语言时回到语言首页
	if (target === 'en') {
		if (route.path === '/')
			return '/en'
		return /^\d{4}\//.test(route.path.slice(1)) ? `/en${route.path}` : '/en'
	}
	if (route.path === '/en')
		return '/'
	return /^en\/\d{4}\//.test(route.path.slice(1)) ? route.path.replace(/^\/en/, '') : '/'
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
