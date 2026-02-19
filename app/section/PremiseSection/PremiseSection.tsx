import { Card, Section } from '@/app/components'

import { PREMISE_CONTENT } from './constants/constants'

import { PremiseCardBody } from './PremiseCardBody'

export const PremiseSection = () => {
	const { header, content } = PREMISE_CONTENT

	return (
		<Section>
			<Section.Header header={header} />
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card) => (
					<Card key={card.title}>
						<Card.Body content={card}>
							<PremiseCardBody {...card} />
						</Card.Body>
					</Card>
				))}
			</Section.Body>
		</Section>
	)
}
