import { Card, Section } from '@/app/components'

import { PRICES_CONTENT } from './constants/constants'

import { PricesCardBody } from './PricesCardBody'

export const PricesSection = () => {
	const { header, content } = PRICES_CONTENT

	return (
		<Section>
			<Section.Header header={header} />
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card, idx) => (
					<Card
						key={card.title}
						className="gap-5 rounded-none pt-0 pb-0 pr-0 pl-0 w-full lg:min-h-120 group"
					>
						<Card.Header title={card.title} idx={idx} />
						<Card.Body content={card}>
							<PricesCardBody {...card} />
						</Card.Body>
					</Card>
				))}
			</Section.Body>
		</Section>
	)
}
