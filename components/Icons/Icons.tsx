import type { JSX } from 'react'

import { RiFacebookBoxFill } from 'react-icons/ri'
import { TfiYoutube } from 'react-icons/tfi'

import type { IconNames } from '@/types/types'

type IconProps = {
	iconVars: IconNames[] | IconNames
}

const IconVariants: { [key in IconNames]: JSX.Element } = {
	facebook: (
		<RiFacebookBoxFill
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key="youtube-icon"
			size={30}
			color="#1150B6"
		/>
	),
	youtube: (
		<TfiYoutube
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key={'facebook-icon'}
			size={30}
			color="#CF1111"
		/>
	)
}

export default function Icons({ iconVars }: IconProps) {
	if (Array.isArray(iconVars)) {
		return iconVars.map((icon) => IconVariants[icon])
	}

	return IconVariants[iconVars]
}
