<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
	error: NuxtError & { url?: string }
}>()

const t = useT()
</script>

<template>
<NuxtLayout>
	<template #aside>
		<WidgetBlogLog />
	</template>

	<div class="app-error">
		<ZError
			:code="error.stack"
			:message="error.url"
			:title="`[${error.status}] ${error.message}`"
		>
			<template #operation>
				<ZButton :text="t('返回主页', 'Back to home')" @click="clearError({ redirect: '/' })" />
				<ZButton :text="t('尝试忽略', 'Try to ignore')" @click="clearError()" />
			</template>
		</ZError>
	</div>
</NuxtLayout>
</template>

<style lang="scss" scoped>
.app-error {
	margin: 1rem;
}
</style>
