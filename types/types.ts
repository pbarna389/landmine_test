export type IconNames = 'facebook' | 'youtube' | 'message' | 'telephone'

export type ArrayElementType<T> = T extends readonly (infer SubType)[] ? SubType : never
