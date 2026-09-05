export type NavText = string | { zh: string, en: string }

export interface NavItem {
	icon: string
	text: NavText
	url: string
	external?: boolean
}

export type Nav = {
	title: NavText
	items: NavItem[]
}[]
