<script setup lang="ts">
import { Temporal } from 'temporal-polyfill'

const props = withDefaults(defineProps<{
	icon?: string
	date?: string | Temporal.ZonedDateTime
	format?: dateTimeFormatOptions
	absolute?: boolean
	relative?: boolean
	/** 传给 NuxtTime 的语言（相对时间文案），默认跟随浏览器 */
	locale?: string
	nospace?: boolean
	tipFormat?: dateTimeFormatOptions
	tipTransform?: (formattedDate: string) => string
}>(), {
	tipTransform: String,
})

const today = Temporal.Now.plainDateISO()
const zdt = computed(() => {
	try {
		return typeof props.date === 'string' ? toZonedTemporal(props.date) : props.date
	}
	catch {
		return null
	}
})

const relative = computed(() => props.absolute || !zdt.value
	? false
	: props.relative || today.since(zdt.value, { largestUnit: 'week' }).weeks < 1,
)

const mounted = useMounted()
const tooltip = computed(() => mounted.value && zdt.value
	? props.tipTransform(toZdtLocaleString(zdt.value, props.tipFormat))
	: props.date as string,
)
</script>

<template>
<span :title="tooltip">
	<Icon v-if="icon" :name="icon" />
	<template v-if="icon && !nospace">&nbsp;</template>

	<span v-if="!zdt">Invalid Date</span>

	<time
		v-else-if="format"
		:datetime="toInstantString(zdt)"
		v-text="toZdtLocaleString(zdt, format)"
	/>

	<NuxtTime
		v-else
		:datetime="toInstantString(zdt)"
		:relative
		:locale="props.locale"
		:year="zdt.year === today.year ? undefined : '2-digit'"
		month="long"
		day="numeric"
		numeric="auto"
	/>
</span>
</template>
