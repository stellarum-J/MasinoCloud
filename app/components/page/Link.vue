<script setup lang="ts">
import { myFeed } from '~~/blog.config'
import feeds from '~/feeds'

defineProps<{
	lang: 'zh' | 'en'
}>()

const appConfig = useAppConfig()
const t = useT()
const locale = useLocale()

const { data: postLink } = await useAsyncData(
	'content:/link',
	() => queryCollection('content').path('/link').first(),
)

useSeoMeta({
	title: computed(() => t('友链', 'Links')),
	ogType: 'profile',
	description: computed(() => `${appConfig.title}${t('的友链页面，收集了添加他为友链的网站和他订阅的网站列表。', '\'s link exchange page — sites that link here and sites this blog subscribes to.')}`),
})

const copyFields = computed(() => ({
	[t('博主', 'Blogger')]: myFeed.author,
	[t('标题', 'Title')]: myFeed.title,
	[t('介绍', 'Description')]: myFeed.desc,
	[t('网址', 'URL')]: myFeed.link,
	[t('头像', 'Avatar')]: myFeed.avatar,
}))

// 友链分组名/描述按语言显示
const feedGroups = computed(() => feeds.map(group => ({
	...group,
	name: locale.value === 'en' ? 'Friends' : group.name,
	desc: locale.value === 'en' ? ' Websites by my friends.' : group.desc,
})))
</script>

<template>
<div class="mobile-only">
	<BlogHeader to="/" :suffix="t('友链', 'Links')" tag="h1" />
</div>

<FeedGroup
	v-for="group in feedGroups"
	:key="group.name"
	v-bind="group"
	:shuffle="appConfig.link.randomInGroup"
/>

<Tab :tabs="[t('我的博客信息', 'My blog info'), t('申请友链', 'Apply for a link')]" center>
	<template #tab1>
		<div class="link-tab">
			<FeedCard v-bind="myFeed" />
			<Copy v-for="(code, prompt) in copyFields" :key="prompt" :prompt :code />
		</div>
	</template>
	<template #tab2>
		<ContentRenderer
			v-if="postLink"
			:value="postLink"
			class="article"
		/>
		<p v-else class="text-center">
			{{ t('可于 link.md 配置友链补充说明。', 'Additional notes can be configured in link.md.') }}
		</p>
	</template>
</Tab>

<PostComment />
</template>

<style lang="scss" scoped>
.link-tab {
	margin: 1rem;
}
</style>
