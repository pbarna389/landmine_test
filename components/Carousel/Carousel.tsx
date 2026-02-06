import Image from 'next/image'

import CarouselImage from './Assets/mm01.webp'

export default function Carousel() {
	return (
		<div className="w-full">
			<Image className="object-center" src={CarouselImage} alt="Carousel Image 1" />
		</div>
	)
}
