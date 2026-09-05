<script setup lang="ts">
const route = useRoute()

const isEn = computed(() => route.path === '/en' || route.path.startsWith('/en/'))

const { data: post } = await useAsyncData(
	`content:${route.path}`,
	async () => {
		const direct = await queryCollection('content').path(route.path).first()
		if (direct || !isEn.value)
			return direct
		// 英文路径无对应译文时，回退展示中文原稿
		return queryCollection('content').path(route.path.replace(/^\/en/, '') || '/').first()
	},
)

// 英文模式下当前展示的是中文原稿（未翻译回退）
const isFallbackZh = computed(() => isEn.value && !!post.value && !post.value.path.startsWith('/en'))

const excerpt = computed(() => post.value?.description || '')
const asideWidgetNames = computed<WidgetName[]>(() => {
	if (!post.value)
		return ['blog-log']
	return (post.value.meta?.aside as WidgetName[] | undefined) ?? ['toc']
})
const { widgets } = useWidgets(asideWidgetNames)

if (post.value) {
	useSeoMeta({
		title: post.value.title,
		ogType: 'article',
		ogImage: post.value.image,
		description: post.value.description,
	})
}
else {
	const event = useRequestEvent()
	event && setResponseStatus(event, 404)
	route.meta.title = '404'
}
</script>

<template>
<template #aside>
	<!-- 更换页面时相同 key 的组件不会更新 -->
	<component :is="widget.comp" v-for="widget in widgets" :key="widget.name" />
</template>

<template v-if="post">
	<div v-if="isFallbackZh" class="lang-fallback gradient-card">
		<Icon name="tabler:language" />
		<span>This article has not been translated yet — showing the Chinese original.</span>
	</div>
	<PostHeader v-bind="post" />
	<PostExcerpt v-if="excerpt" :excerpt />
	<!-- 使用 float-in 动画会导致搜索跳转不准确 -->
	<ContentRenderer
		class="article"
		:class="getPostTypeClassName(post?.type, { prefix: 'md' })"
		:value="post"
		tag="article"
	/>

	<PostFooter v-bind="post" />
	<PostSurround />
	<PostComment />
</template>

<ZError
	v-else
	icon="line-md:document-delete-twotone"
	title="内容为空或页面不存在"
/>
</template>

<style lang="scss" scoped>
.lang-fallback {
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin: 1rem 1rem 0;
	padding: 0.6em 1em;
	font-size: 0.9em;
	color: var(--c-text-2);
}
</style>
