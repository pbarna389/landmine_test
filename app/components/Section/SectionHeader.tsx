import type { SectionProps } from './types'

export const SectionHeader = ({ children, className }: SectionProps) => {
	return <div className={`${className} relative`}>{children}</div>
}
