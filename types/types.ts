import type { PRICES_CONTENT } from '@/app/section/PricesSection/constants/constants'

export type IconNames = 'facebook' | 'youtube' | 'message' | 'telephone' | 'tiktok'

export type ArrayElementType<T> = T extends readonly (infer SubType)[] ? SubType : never
export type WidthValuesType =
	| 'w-full'
	| `w-${number extends number ? number : never}`
	| `w-[${number extends number ? number : never}px]`
	| `w-[${number extends number ? number : never}%]`
	| `w-[calc(${number extends number ? number : never}${'vw'}*${number extends number ? number : never}.${number extends number ? number : never})]`

export type HeightValuesType =
	| 'h-full'
	| `h-${number extends number ? number : never}`
	| `h-[${number extends number ? number : never}px]`
	| `h-[${number extends number ? number : never}%]`
	| `h-[calc(${number extends number ? number : never}${'vh'}*${number extends number ? number : never}.${number extends number ? number : never})]`

export type PricesContentType = ArrayElementType<(typeof PRICES_CONTENT)['content']>
export type ContentHeaderType = (typeof PRICES_CONTENT)['header']
