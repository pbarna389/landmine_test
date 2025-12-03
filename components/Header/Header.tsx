'use client'

import Image from 'next/image'

import Logo from '@/public/logo3.png'

import { DesktopNavbar } from './DesktopNavbar'

export default function Header() {
	return (
		<header className="absolute top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[3.2rem] pr-9.5 pt-0.5 pb-0.5 border-green-500">
			<Image src={Logo} alt="logo" className="w-auto h-min object-contain scale-76 pt-1" />
			<DesktopNavbar />
		</header>
	)
}
