import Image from 'next/image'

import Logo from '@/public/logo3.png'

import { NAV_ELEMENTS, NAV_ICONS } from '@/constants/constants'

import Icons from '../Icons/Icons'

export default function Header() {
	return (
		<header className="absolute top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[3.2rem] pr-9.5 pt-0.5 pb-0.5 border-green-500">
			<Image src={Logo} alt="logo" className="w-auto h-min object-contain scale-76 pt-1" />
			<nav className="flex gap-8.5">
				<ul className="flex gap-6.25 text-black">
					{NAV_ELEMENTS.map((el) => (
						<li
							className="relative uppercase font-montserrat text-[17.75px] font-bold tracking-[2px] h-full leading-10 text-base hover:text-hover transition-all cursor-pointer before:absolute before:content-[''] before:w-full  before:top-1/4 before:left-0 before:bg-transparent before:transition-all before:duration-300 hover:before:h-0.5 hover:before:bg-hover hover:before:-top-2 "
							key={`nav-${el}`}
						>
							{el}
						</li>
					))}
				</ul>
				<div className="flex gap-1.5 items-center">
					<Icons iconVars={NAV_ICONS} />
				</div>
			</nav>
		</header>
	)
}
