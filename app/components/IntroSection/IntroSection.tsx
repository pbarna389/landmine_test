import Image from 'next/image'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { INTRO_SECTION_IMG_ALT, INTRO_SECTION_TEXT } from './constants/constants'

import Image1 from './Assets/gitarora.webp'
import Image2 from './Assets/pecset.webp'

export const IntroSection = () => {
	return (
		<section
			className={`bg-intro text-black w-full flex flex-col-reverse items-center justify-center p-8 lg:flex lg:flex-row lg:gap-10 lg:items-start lg:p-35 lg:pt-30 lg:pb-28`}
		>
			<div className="basis-28/30 relative group">
				<RotatableImage src={Image1} className="pt-1.5 w-[100vw*0.8] lg:w-full" />
				<p className="absolute opacity-0 bottom-0 right-0 transition-opacity duration-750 group-hover:opacity-100 text-sm">
					<span className="text-green-700 font-bold">✓ </span>
					{INTRO_SECTION_TEXT.imageText}
				</p>
			</div>
			<div className="space-y-3 lg:space-y-1 font-bold font-montserrat leading-6 lg:leading-12 text-center lg:text-left">
				<div className="text-[28px] lg:text-[49px]">
					<h2 className="text-hover m-0">{INTRO_SECTION_TEXT.headerText1}</h2>
					<h2 className="font-white">{INTRO_SECTION_TEXT.headerText2}</h2>
				</div>
				<p className="text-[18px] font-normal">{INTRO_SECTION_TEXT.text}</p>
				<Image
					alt={INTRO_SECTION_IMG_ALT.img1}
					src={Image2}
					className="object-cover w-[63%] border-0 hidden lg:block"
				/>
			</div>
		</section>
	)
}
