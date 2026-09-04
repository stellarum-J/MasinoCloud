import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'

export default [
	{
		name: '朋友们',
		desc: '我的朋友们。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			{
				author: '纸鹿本鹿',
				sitenick: '纸鹿',
				title: '纸鹿摸鱼处',
				desc: '纸鹿本鹿的个人博客，分享技术与生活。',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: 'https://www.zhilu.site/api/icon.png',
				avatar: 'https://www.zhilu.site/api/avatar.png',
				archs: ['Nuxt'],
				date: '2026-09-04',
				comment: 'blog-v3 与 Clarity 主题作者，博主朋友。',
			},
		],
	},
] satisfies FeedGroup[]
