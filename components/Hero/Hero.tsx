'use client'

import Image from 'next/image'

import { useCarousel } from '@/hooks/useCarousel'
import { HERO_DATA } from './constants/constants'
import { BASE_BASE_ANIM_TIMEOUT, BASE_TIMEOUT } from '@/constants/constants'

export default function Hero() {
	const { idx, loaded, setLoaded } = useCarousel(
		HERO_DATA.length,
		BASE_BASE_ANIM_TIMEOUT,
		BASE_TIMEOUT
	)

	const selectedData = HERO_DATA[idx]

	return (
		<div
			className={`w-full h-screen relative z-1 transition-all duration-250 ${loaded ? 'opacity-100' : 'opacity-0'}`}
		>
			<Image
				className="fill object-cover h-full w-full overflow-clip"
				src={selectedData.img}
				key={`hero-image-${selectedData.img}`}
				alt={`Hero Image ${idx}`}
				onLoad={() => setLoaded(true)}
				onError={() => setLoaded(true)}
			/>
			<div
				className={`absolute z-5 space-y-10 text-[calc(100vw*0.12)]  text-center gap-15 transform -translate-1/2 sm:text-5xl md:translate-0 md:text-left font-montserrat font-bold leading-13 transition-all duration-1000 ${loaded ? 'opacity-100 top-3/8 left-1/2 md:top-[29.6%] md:left-1/15' : 'opacity-0 top-1/2 left-1/2 md:top-[29.6%] md:left-1/2'}`}
			>
				<div>
					<h2 className="font-white">{selectedData.text1[0]}</h2>
					<h2 className="text-hero-highlight">{selectedData.text1[1]}</h2>
				</div>
				<div className="space-y-3 text-sm md:text-md *:font-white *:font-medium">
					<h6>{selectedData.text2}</h6>
					<h6>{selectedData.text3}</h6>
				</div>
			</div>
		</div>
	)
}
