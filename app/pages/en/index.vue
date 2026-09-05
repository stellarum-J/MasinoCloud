<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
	title: 'Home',
	description: appConfig.description,
	ogImage: appConfig.author.avatar,
})
</script>

<template>
<template #aside>
	<WidgetBlogStats />
	<WidgetBlogTech />
	<WidgetCommGroup />
</template>

<PageHome lang="en" />
</template>
