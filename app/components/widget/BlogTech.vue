<script setup lang="ts">
import { Icon } from '#components'
import { merge } from 'es-toolkit/object'
import { packageManager, version } from '~~/package.json'
import pnpmWorkspace from '~~/pnpm-workspace.yaml'

const appConfig = useAppConfig()
const t = useT()
const { public: { arch, ci, nodeVersion, platform } } = useRuntimeConfig()

const ciPlatform = computed(() => {
	const iconName = ciIcons[ci]
	if (!iconName)
		return ''

	const iconNode = iconName.startsWith('http')
		? h('img', { src: iconName, alt: '' })
		: h(Icon, { name: iconName })

	return h('span', {}, [iconNode, ` ${ci.split(' ')[0]}`])
})

// @ts-expect-error pnpm-workspace.yaml 无类型定义
const packages = merge(...Object.values(pnpmWorkspace.catalogs))
const [pm, pmVersion] = packageManager.split('@') as [string, string]

const service = computed(() => ([
	...ci ? [{ label: t('构建平台', 'Build platform'), value: ciPlatform }] : [],
	{ label: t('图片存储', 'Image storage'), value: () => [h(Icon, { name: 'devicon:cloudflare' }), ' R2'] },
	{ label: t('软件协议', 'License'), value: 'MIT' },
	{ label: t('文章许可', 'Content license'), value: appConfig.copyright.abbr },
	{ label: t('规范域名', 'Canonical domain'), value: getDomain(appConfig.url) },
]))

const techstack = computed(() => ([
	{ label: 'Blog', value: version },
	{ label: 'Vue', value: packages.vue },
	{ label: 'Nuxt', value: packages.nuxt },
	{ label: 'Content', value: packages['@nuxt/content'] },
	{ label: 'Node', value: nodeVersion },
	{ label: pm, value: pmVersion },
	{ label: 'OS', value: platform },
	{ label: 'Arch', value: arch },
]))

const expand = ref(false)
</script>

<template>
<BlogWidget card grayscale :title="t('技术信息', 'Tech info')">
	<ZDlGroup :items="service" />
	<ZExpand v-model="expand" in-place :name="t('构建信息', 'Build info')">
		<ZDlGroup size="small" :items="techstack" />
	</ZExpand>
</BlogWidget>
</template>

<style lang="scss" scoped>
.z-expand {
	margin-top: 0.2em;
}

.dl-group :deep(img) {
	height: 1.2em;
	vertical-align: sub;
}
</style>
