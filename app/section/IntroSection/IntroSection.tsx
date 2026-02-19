import Image from 'next/image'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { INTRO_SECTION_IMG_ALT, INTRO_SECTION_TEXT } from './constants/constants'

import Image1 from './Assets/gitarora.webp'
import Image2 from './Assets/pecset.webp'
import { MobileAdvert } from './MobileAdvert'

export const IntroSection = () => {
	return (
		<section
			className={`bg-white text-black w-full flex flex-col-reverse items-center justify-center p-8 lg:flex lg:flex-row lg:gap-10 lg:items-start lg:p-35 lg:pt-28 lg:pb-28`}
		>
			<MobileAdvert />
			<div className="basis-28/30 relative group">
				<RotatableImage
					src={Image1}
					className="pt-1.5 max-w-[calc(100vw*0.8)] min-w-42.5 lg:w-full"
				/>
				<p className="absolute text-nowrap -bottom-5 left-1/2 transform -translate-x-1/2 z-0 opacity-100 cursor-default select-none lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 text-sm lg:opacity-0 lg:bottom-0 lg:left-auto lg:right-0">
					<span className="text-green-700 font-bold">✓</span>
					{INTRO_SECTION_TEXT.imageText}
				</p>
			</div>
			<div className="space-y-3 lg:space-y-1 font-bold font-montserrat leading-6 lg:leading-12 text-center lg:text-left">
				<div className="text-[28px] lg:text-[49px]">
					<h2 className="text-section-heading-highlight m-0">
						{INTRO_SECTION_TEXT.headerText1}
					</h2>
					<h2 className="font-white">{INTRO_SECTION_TEXT.headerText2}</h2>
				</div>
				<p className="text-[18px] font-normal">{INTRO_SECTION_TEXT.text}</p>
				<Image
					alt={INTRO_SECTION_IMG_ALT.img1}
					src={Image2}
					className="object-cover w-[63%] hidden lg:block"
				/>
			</div>
		</section>
	)
}
