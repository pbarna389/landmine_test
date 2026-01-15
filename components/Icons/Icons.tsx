import type { JSX } from 'react'

import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

import type { IconNames } from '@/types/types'

type IconProps = {
	iconVars: IconNames[] | IconNames
}

const IconVariants: { [key in IconNames]: JSX.Element } = {
	facebook: (
		<RiFacebookBoxFill
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key="youtube-icon"
			size={28}
			color="#1150B6"
		/>
	),
	youtube: (
		<TbBrandYoutubeFilled
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key={'facebook-icon'}
			size={28}
			color="#CF1111"
		/>
	),
	message: (
		<FaTelegramPlane
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key={'message-icon'}
			size={28}
			color="#000"
		/>
	),
	telephone: (
		<BsFillTelephoneFill
			className="transition-all hover:scale-110 hover:brightness-125 cursor-pointer"
			key={'telephone-icon'}
			size={28}
			color="#000"
		/>
	)
}

export const Icons = ({ iconVars }: IconProps) => {
	if (Array.isArray(iconVars)) {
		return iconVars.map((icon) => IconVariants[icon])
	}

	return IconVariants[iconVars]
}
