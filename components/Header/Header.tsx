import Image from 'next/image'

import Logo from '@/public/logo3.png'

import { NAV_ELEMENTS } from '@/constants/constants'

export default function Header() {
	return (
		<header className="absolute top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[3.2rem] p-[0.01%] pt-0.5 pb-0.5">
			<Image src={Logo} alt="logo" className="w-auto h-min object-contain scale-76 pt-1" />
			<nav className="flex">
				<ul className="flex gap-4.75 text-black">
					{NAV_ELEMENTS.map((el) => (
						<li
							className="uppercase font-montserrat font-bold tracking-[2px] h-full leading-10 text-base hover:text-hover transition-all cursor-pointer"
							key={`nav-${el}`}
						>
							{el}
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
