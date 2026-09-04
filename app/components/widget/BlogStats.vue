<script setup lang="ts">
import { UtilDate } from '#components'

const runtimeConfig = useRuntimeConfig()

// 响应头不正确时，stats.value 可能会是字符串，首次属性访问可能为 undefined
const { data: stats } = useFetch('/api/stats')

const yearlyTip = computed(() => Object
	.entries(stats.value?.annual || {})
	.reverse()
	.map(([year, item]) => `${year}年：${item.posts}篇，${formatNumber(item.words)}字`)
	.join('\n') || '数据获取失败',
)

// 精确到分钟：博客首次公网可访问的时刻（2026-09-04 20:31，安全组放行后的首个 200）
const establishedAt = '2026-09-04T20:31'

const blogStats = [{
	label: '运营时长',
	value: timeElapse(establishedAt),
	tip: '博客于 2026-09-04 20:31 上线',
}, {
	label: '上次更新',
	value: () => h(UtilDate, {
		date: runtimeConfig.public.buildTime,
		relative: true,
		tipPrefix: '构建于',
	}),
}, {
	label: '总字数',
	value: computed(() => formatNumber(stats.value?.total?.words) || '--'),
	tip: yearlyTip,
}]
</script>

<template>
<BlogWidget card title="博客统计">
	<ZDlGroup :items="blogStats" size="small" />
</BlogWidget>
</template>
