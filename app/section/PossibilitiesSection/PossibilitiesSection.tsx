import { Section } from '@/app/components'

import { POSSIBILITIES_CONTENT } from './constants/constants'

import { PossibilityParagraph } from './PossibilityParagraph'

export const PossibilitiesSection = () => {
	const {
		header,
		content: { body }
	} = POSSIBILITIES_CONTENT

	return (
		<Section>
			<Section.Header side="right">
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
						{header.title}
					</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="uppercase text-[14px] sm:text-[16px] md-[18px] lg:text-[20px]">
						{header.subTitle}
					</h2>
				</div>
			</Section.Header>
			<Section.Body className="w-9/10 sm:w-4/5 md:w-[70%] lg:w-1/2 p-5 bg-white shadow-2xl space-y-5">
				{body.map((paragraph) => (
					<PossibilityParagraph key={paragraph.id} content={paragraph} />
				))}
			</Section.Body>
		</Section>
	)
}
