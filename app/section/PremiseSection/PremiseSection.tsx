import { Card, Section } from '@/app/components'

import { PREMISE_CONTENT } from './constants/constants'

export const PremiseSection = () => {
	const { header, content } = PREMISE_CONTENT

	return (
		<Section>
			<Section.Header className="w-full pt-11 pb-14 border border-blue bg-section-header-bg *:text-black">
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
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card) => (
					<Card key={card.title}>
						<Card.Body content={card} />
					</Card>
				))}
			</Section.Body>
		</Section>
	)
}
