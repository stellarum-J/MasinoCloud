<script setup lang="ts">
import { UtilDate } from '#components'

const runtimeConfig = useRuntimeConfig()
const t = useT()
const locale = useLocale()

// 响应头不正确时，stats.value 可能会是字符串，首次属性访问可能为 undefined
const { data: stats } = useFetch('/api/stats')

const yearlyTip = computed(() => Object
	.entries(stats.value?.annual || {})
	.reverse()
	.map(([year, item]) => locale.value === 'en'
		? `${year}: ${item.posts} posts, ${formatNumber(item.words)} words`
		: `${year}年：${item.posts}篇，${formatNumber(item.words)}字`)
	.join('\n') || t('数据获取失败', 'Failed to load stats'),
)

// 精确到分钟：博客首次公网可访问的时刻（2026-09-04 20:31，安全组放行后的首个 200）
const establishedAt = '2026-09-04T20:31'

const blogStats = [{
	label: t('运营时长', 'Uptime'),
	value: timeElapse(establishedAt),
	tip: t('博客于 2026-09-04 20:31 上线', 'Online since 2026-09-04 20:31'),
}, {
	label: t('上次更新', 'Last build'),
	value: () => h(UtilDate, {
		date: runtimeConfig.public.buildTime,
		relative: true,
		tipPrefix: locale.value === 'en' ? 'Built at' : '构建于',
	}),
}, {
	label: t('总字数', 'Total words'),
	value: computed(() => formatNumber(stats.value?.total?.words) || '--'),
	tip: yearlyTip,
}]
</script>

<template>
<BlogWidget card :title="t('博客统计', 'Blog stats')">
	<ZDlGroup :items="blogStats" size="small" />
</BlogWidget>
</template>
