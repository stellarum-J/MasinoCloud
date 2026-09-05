<script setup lang="ts">
const { timeEstablished } = useAppConfig()
const t = useT()

const blogLogRaw = [
	{ label: '2026-09-04', zh: '阿里云 ECS 从零搭建：系统调优、Docker、Nginx、SSH 加固', en: 'Built the Aliyun ECS from scratch: system tuning, Docker, Nginx, SSH hardening' },
	{ label: '2026-09-04', zh: '部署博客 Maŝino（blog-v3 主题）并上线', en: 'Deployed the Maŝino blog (blog-v3 theme) and brought it online' },
	{ label: '2026-09-04', zh: '接入自建 Twikoo 评论系统', en: 'Integrated the self-hosted Twikoo comment system' },
	{ label: timeEstablished, zh: '发布第一篇文章', en: 'Published the first post' },
]

const blogLog = computed(() => blogLogRaw.map(({ label, zh, en }) => ({ label, value: t(zh, en) })))
</script>

<template>
<BlogWidget card :title="t('更新日志', 'Changelog')">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
