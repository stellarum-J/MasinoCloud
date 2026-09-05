<script setup lang="ts">
const appConfig = useAppConfig()

const { data: list } = await useAsyncData(
	'en:posts',
	() => queryCollection('content')
		.where('stem', 'LIKE', 'en/posts/%')
		.select('categories', 'date', 'description', 'image', 'path', 'readingTime', 'recommend', 'tags', 'title', 'type', 'updated')
		.order('date', 'DESC')
		.all(),
)

useSeoMeta({
	title: 'Home',
	description: `${appConfig.title} — English edition`,
})
</script>

<template>
<div class="en-home">
	<header class="en-home-header">
		<h1>{{ appConfig.title }}</h1>
		<p>This is the English edition of the blog. The full catalogue is available in Chinese — use the language switch in the sidebar.</p>
	</header>

	<menu class="en-home-list">
		<PostArticle
			v-for="article, index in list ?? []"
			:key="article.path"
			v-bind="article"
			:to="article.path"
			:style="getFixedDelay(index * 0.05)"
		/>
	</menu>
</div>
</template>

<style lang="scss" scoped>
.en-home {
	margin: 1rem;

	> .en-home-header {
		margin: 2rem 1rem;

		> h1 {
			font-size: 2rem;
		}

		> p {
			margin-top: 0.5rem;
			color: var(--c-text-2);
		}
	}

	> .en-home-list {
		display: grid;
		gap: 1rem;
	}
}
</style>
