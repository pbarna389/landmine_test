import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type RotatableImage = {
	className: string
	src: string | StaticImageData
	rotateLeft?: boolean
}

export const RotatableImage = ({ src, className, rotateLeft = true }: RotatableImage) => {
	return (
		<Image
			className={`object-cover transition-transform duration-750 ${rotateLeft ? 'group-hover:-rotate-8' : 'group-hover:rotate-8'} ${className}`}
			src={src}
			alt={'rotatableImage'}
		/>
	)
}
