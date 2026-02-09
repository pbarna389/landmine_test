'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'

import { CarouselData, CarouselTimeout } from './constants/constants'

export default function Carousel() {
	const [idx, setIdx] = useState(0)
	const [loaded, setLoaded] = useState(false)

	const selectedData = CarouselData[idx]

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		const intervalId = setInterval(() => {
			setLoaded(false)

			timeoutId = setTimeout(() => {
				setIdx((prev) => (prev + 1) % CarouselData.length)
			}, 250)
		}, CarouselTimeout)

		return () => {
			clearInterval(intervalId)
			if (timeoutId !== null) clearTimeout(timeoutId)
		}
	}, [])

	return (
		<div
			className={`w-full h-screen relative z-1 transition-all duration-250 ${loaded ? 'opacity-100' : 'opacity-0'}`}
		>
			<Image
				className="fill object-cover h-full w-full overflow-clip"
				src={selectedData.img}
				key={`carousel-image-${selectedData.img}`}
				alt={`Carousel Image ${idx}`}
				onLoad={() => setLoaded(true)}
				onError={() => setLoaded(true)}
			/>
			<div
				className={`absolute z-5 space-y-10 text-center gap-15 transform -translate-1/2 md:translate-0 md:text-left text-5xl font-montserrat font-bold leading-13 transition-all duration-1000 ${loaded ? 'opacity-100 top-3/8 left-1/2 md:top-[29.6%] md:left-1/15' : 'opacity-0 top-1/2 left-1/2 md:top-[29.6%] md:left-1/2'}`}
			>
				<div>
					<h2 className="font-white">{selectedData.text1[0]}</h2>
					<h2 className="text-carousel">{selectedData.text1[1]}</h2>
				</div>
				<div className="space-y-3 *:text-sm *:font-white *:font-medium">
					<h6>{selectedData.text2}</h6>
					<h6>{selectedData.text3}</h6>
				</div>
			</div>
		</div>
	)
}
