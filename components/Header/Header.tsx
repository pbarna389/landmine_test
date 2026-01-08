'use client'

import Image from 'next/image'

import Logo2 from '@/public/logo2.png'
import Logo1 from '@/public/logo3.png'

import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export default function Header() {
	return (
		<header className="absolute top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[2.12rem] pr-4.5 pl-3.5 pt-0.5 pb-0.5 shadow-md/16 shadow-black border-green-500 lg:h-[3.2rem] lg:pl-6 lg:pr-9.5">
			<Image src={Logo1} alt="logo" className="hidden w-38 object-contain pt-1 lg:block" />
			<Image src={Logo2} alt="logo" className="block w-25 object-contain mb-1 lg:hidden" />
			<DesktopNavbar />
			<MobileNavbar />
		</header>
	)
}
