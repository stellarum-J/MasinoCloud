<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
	title: 'Archive',
	description: `${appConfig.title} — all posts, archived.`,
})
</script>

<template>
<template #aside>
	<WidgetBlogStats />
	<WidgetBlogLog />
</template>

<PageArchive lang="en" />
</template>
