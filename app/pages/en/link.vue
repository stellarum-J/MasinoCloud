<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
	title: 'Links',
	ogType: 'profile',
	description: `${appConfig.title}'s link exchange page — sites that link here and sites this blog subscribes to.`,
})
</script>

<template>
<PageLink lang="en" />
</template>
