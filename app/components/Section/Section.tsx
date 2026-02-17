import type { SectionProps } from './types'

import { SectionHeader } from './SectionHeader'

export const Section = ({ children, className }: SectionProps) => {
	return <section className={className}>{children}</section>
}

Section.Header = SectionHeader
