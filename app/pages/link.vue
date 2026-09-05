<script setup lang="ts">
import { myFeed } from '~~/blog.config'

const appConfig = useAppConfig()
useSeoMeta({
	title: '友链',
	ogType: 'profile',
	description: `${appConfig.title}的友链页面，收集了添加他为友链的网站和他订阅的网站列表。`,
})
</script>

<template>
<PageLink lang="zh" />
</template>
