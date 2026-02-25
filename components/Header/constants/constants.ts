import type { IconNames } from '@/types'

export const NAV_ELEMENTS = [
	'főoldal',
	'adatlap',
	'gitároktatás',
	'videók',
	'zenék',
	'cikkek'
]

export const NAV_ICONS_DESKTOP: IconNames[] = ['tiktok', 'facebook', 'youtube']

export const NAV_ICONS_MOBILE: IconNames[] = [
	...NAV_ICONS_DESKTOP.reverse(),
	'message',
	'telephone'
]
