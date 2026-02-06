'use client'

import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { CarouselData, CarouselTimeout } from './constants/constants'

export default function Carousel() {
	const [idx, setIdx] = useState<number>(0)

	const selectedData = CarouselData[idx]

	const intervalTimeout = useRef<ReturnType<typeof setInterval> | null>(null)

	useEffect(() => {
		intervalTimeout.current = setInterval(() => {
			setIdx((prev) => (prev + 1) % CarouselData.length)
		}, CarouselTimeout)

		return () => {
			if (intervalTimeout.current) {
				clearInterval(intervalTimeout.current)
			}
		}
	}, [])

	return (
		<div className="w-full h-screen">
			<Image
				className="object-cover h-full w-full overflow-clip"
				src={selectedData.img}
				alt="Carousel Image 1"
			/>
		</div>
	)
}
