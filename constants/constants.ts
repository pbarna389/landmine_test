import type { IconNames } from '@/types/types'

export const NAV_ELEMENTS = [
	'főoldal',
	'adatlap',
	'gitároktatás',
	'videók',
	'zenék',
	'cikkek'
]

export const NAV_ICONS_DESKTOP: IconNames[] = ['facebook', 'youtube']

export const NAV_ICONS_MOBILE: IconNames[] = [
	...NAV_ICONS_DESKTOP.reverse(),
	'message',
	'telephone'
]

export const BASE_TIMEOUT = 7500
export const BASE_BASE_ANIM_TIMEOUT = 500
