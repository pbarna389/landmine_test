import type { SectionProps } from './types'

import { SectionBody } from './SectionBody'
import { SectionHeader } from './SectionHeader'

export const Section = ({ children, className }: SectionProps) => {
	return (
		<section
			className={`flex flex-col items-center justify-center w-full bg-white *:font-montserrat *:text-center pb-28 ${className}`}
		>
			{children}
		</section>
	)
}

Section.Header = SectionHeader
Section.Body = SectionBody
