export type Locale = 'zh' | 'en'

/** 当前页面语言：/en/** 为英文，其余中文 */
export function useLocale() {
	const route = useRoute()
	return computed<Locale>(() => route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'zh')
}

/** 双语文案：t('中文', 'English')，按当前路由语言取值 */
export function useT() {
	const locale = useLocale()
	return (zh: string, en: string) => (locale.value === 'en' ? en : zh)
}

/** 配置里的双语文本（string 或 { zh, en }）按语言取值 */
export function navText(text: string | { zh: string, en: string }, locale: Locale): string {
	return typeof text === 'string' ? text : text[locale]
}

/** 分类显示名（配置键为中文，英文模式下映射显示） */
export function getCategoryLabel(category: string | undefined, locale: Locale): string {
	if (!category)
		return ''
	if (locale !== 'en')
		return category
	return ({
		观察: 'Observe',
		技术: 'Tech',
		开发: 'Dev',
		安全: 'Security',
		杂谈: 'Musings',
		生活: 'Life',
		未分类: 'Uncategorized',
	} as Record<string, string>)[category] ?? category
}
