import Image from 'next/image'

import type { PremiseContent } from '@/app/section/PremiseSection/constants/constants'

type CardBodyProps = {
	content: PremiseContent
}

export const CardBody = ({ content }: CardBodyProps) => {
	return (
		<div className="flex flex-col items-center gap-5 w-full text-center lg:text-justify">
			<Image
				className="w-1/2 sm:w-3/8 lg:w-11/20"
				src={content.image}
				alt={`image for ${content.title}`}
			/>
			<h3 className="uppercase text-md text-wrap lg:text-nowrap">
				{content.title}
				<span className="ml-1">✓</span>
			</h3>
			<hr className="w-full border border-black/20" />
			<p className="text-[15px]">{content.text}</p>
		</div>
	)
}
