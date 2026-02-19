import type { PRICES_CONTENT } from '@/app/section/PricesSection/constants/constants'

export type IconNames = 'facebook' | 'youtube' | 'message' | 'telephone'

export type ArrayElementType<T> = T extends readonly (infer SubType)[] ? SubType : never

export type PricesContentType = ArrayElementType<(typeof PRICES_CONTENT)['content']>
export type ContentHeaderType = (typeof PRICES_CONTENT)['header']
