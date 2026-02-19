import type { SectionProps } from './types'
import type { ContentHeaderType } from '@/types'

import { Cube } from './Cube'

type SectionHeaderProps = SectionProps & {
	header: ContentHeaderType
	side?: 'left' | 'right'
}

export const SectionHeader = ({
	children,
	className,
	header,
	side = 'left'
}: SectionHeaderProps) => {
	return (
		<div
			className={`w-full pt-11 pb-14 border border-blue bg-section-header-bg *:text-black relative ${className}`}
		>
			<div
				className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-3 sm:right-3 md:right-5 lg:right-7.25'} transform -translate-1/2 translate-x-2/10 sm:space-y-3 sm:top-15/200 md:space-y-5 md:top-31/240 lg:space-y-7 lg:top-8/45`}
			>
				<Cube />
				<Cube className="hidden sm:block" color={'cube-secondary'} />
			</div>
			<div className="flex flex-col gap-4 items-center justify-center mb-17">
				<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
					{header.title}
				</h2>
				<span className="h-0.5 w-15 bg-section-heading-highlight" />
			</div>
			{children}
		</div>
	)
}
