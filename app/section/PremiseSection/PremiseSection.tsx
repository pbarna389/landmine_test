import { Section } from '@/app/components'

import { PREMISE_CONTENT } from './constants/constants'

export const PremiseSection = () => {
	const { header, content } = PREMISE_CONTENT

	return (
		<Section className="flex flex-col items-center justify-center border border-white w-full *:font-montserrat">
			<Section.Header className="w-full pt-11 pb-14 border border-blue bg-section-header-bg *:text-black">
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[36px]">{header.title}</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="uppercase text-[20px]">{header.subTitle}</h2>
				</div>
			</Section.Header>
			<div className="pt-5 pb-5 border border-green relative -top-5">
				<p>test1</p>
				<p>test2</p>
				<p>test3</p>
			</div>
		</Section>
	)
}
