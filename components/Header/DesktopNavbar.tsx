'use client'

import { NAV_ELEMENTS, NAV_ICONS_DESKTOP } from '@/constants/constants'

import { Icons } from '../Icons/Icons'

export const DesktopNavbar = () => {
	return (
		<nav className="hidden lg:flex gap-8.5">
			<ul className="flex lg:gap-5.25 lg:text-black">
				{NAV_ELEMENTS.map((el) => (
					<li
						className="relative font-montserrat uppercase text-[16.4px] font-bold tracking-[2px] h-full leading-10 text-base hover:text-hover transition-all duration-300 cursor-pointer before:absolute before:content-[''] before:w-full before:top-1/4 before:left-0 before:bg-transparent before:transition-all before:duration-300 hover:before:h-0.5 hover:before:bg-hover hover:before:-top-2  "
						key={`nav-${el}`}
					>
						{el}
					</li>
				))}
			</ul>
			<div className="flex gap-1.5 items-center">
				<Icons iconVars={NAV_ICONS_DESKTOP} />
			</div>
		</nav>
	)
}
