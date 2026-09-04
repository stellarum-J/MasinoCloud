<script setup lang="ts">
const { timeEstablished } = useAppConfig()

const blogLog = [
	{ label: '2026-09-04', value: '阿里云 ECS 从零搭建：系统调优、Docker、Nginx、SSH 加固' },
	{ label: '2026-09-04', value: '部署博客 Maŝino（blog-v3 主题）并上线' },
	{ label: '2026-09-04', value: '接入自建 Twikoo 评论系统' },
	{ label: timeEstablished, value: '发布第一篇文章' },
]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
