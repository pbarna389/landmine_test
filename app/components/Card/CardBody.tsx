import Image from 'next/image'

import type { PremiseContentType } from '@/app/section/PremiseSection/constants/constants'

type CardBodyProps = React.PropsWithChildren & {
	content: Omit<PremiseContentType, 'text' | 'emoticon'>
}

export const CardBody = ({ children, content }: CardBodyProps) => {
	return (
		<div className="flex flex-col items-center gap-5 w-full text-center lg:text-justify">
			<Image
				className="w-1/2 sm:w-3/8 lg:w-11/20"
				src={content.image}
				alt={`image for ${content.title}`}
			/>
			{children}
		</div>
	)
}
