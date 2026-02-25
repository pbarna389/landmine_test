import type { IconNames } from '@/types'

export const NAV_ELEMENTS = [
	{ text: 'főoldal', href: '' },
	{ text: 'adatlap', href: '' },
	{ text: 'gitároktatás', href: '' },
	{ text: 'videók', href: '' },
	{ text: 'zenék', href: '' },
	{ text: 'cikkek', href: '' }
]

export const NAV_ICONS_DESKTOP: IconNames[] = ['tiktok', 'facebook', 'youtube']

export const NAV_ICONS_MOBILE: IconNames[] = [
	...NAV_ICONS_DESKTOP.reverse(),
	'message',
	'telephone'
]
