import Image from 'next/image'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { INTRO_SECTION_IMG_ALT, INTRO_SECTION_TEXT } from './constants/constants'

import Image1 from './Assets/gitarora.webp'
import Image2 from './Assets/pecset.webp'

export const IntroSection = () => {
	return (
		<section
			className={`bg-intro flex gap-10 border-2 border-green items-start justify-center w-full p-35 pt-30 pb-28  text-black`}
		>
			<div className="basis-17/21 relative group">
				<RotatableImage src={Image1} className="pt-1.5" />
				<p className="absolute opacity-0 bottom-0 right-0 transition-opacity duration-750 group-hover:opacity-100 text-sm">
					<span className="text-green-700 font-bold">✓ </span>
					{INTRO_SECTION_TEXT.imageText}
				</p>
			</div>
			<div className="w-1/2 basis-1xl space-y-1 font-bold font-montserrat leading-12">
				<div className="text-[49px]">
					<h2 className="text-hover m-0">{INTRO_SECTION_TEXT.headerText1}</h2>
					<h2 className="font-white">{INTRO_SECTION_TEXT.headerText2}</h2>
				</div>
				<p className="text-[18px] font-normal">{INTRO_SECTION_TEXT.text}</p>
				<Image
					alt={INTRO_SECTION_IMG_ALT.img1}
					src={Image2}
					className="object-cover w-[63%] border-0"
				/>
			</div>
		</section>
	)
}
