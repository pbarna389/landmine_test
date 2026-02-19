import Image from 'next/image'

import type { PossibilitiesBodyType } from './constants/constants'
import type { ArrayElementType } from '@/types'

type PossibilityParagraphProps = {
	content: ArrayElementType<PossibilitiesBodyType['body']>
}

export const PossibilityParagraph = ({ content }: PossibilityParagraphProps) => {
	return (
		<div className="text-start text-[20px] md:text-[16px]">
			{content.header && (
				<h5 className="pb-5 text-lg md:text-[19px]">
					{content.emoticon && <span>{content.emoticon}</span>}
					{content.header}
				</h5>
			)}
			<p>{content.text}</p>
			{content.images && Array.isArray(content.images) && (
				<div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
					{content.images.map((image) => (
						<Image
							className="object-cover min-w-[50%] max-w-3/5 sm:min-w-1/3 sm:max-w-4/9 pt-5"
							key={`pos-paragraph-${image.alt}`}
							src={image.src}
							alt={image.alt}
						/>
					))}
				</div>
			)}
			{content.images && !Array.isArray(content.images) && (
				<Image
					className="object-cover w-full pt-5"
					key={`pos-paragraph-${content.images?.alt}`}
					src={content.images?.src}
					alt={content.images?.alt}
				/>
			)}
		</div>
	)
}
