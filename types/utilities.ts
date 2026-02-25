export type ArrayElementType<T> = T extends readonly (infer SubType)[] ? SubType : never
