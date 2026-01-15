'use client'

import Image from 'next/image'

import Logo2 from '@/public/logo2.png'
import Logo1 from '@/public/logo3.png'

import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'

import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export default function Header() {
	const isMobile = useBreakpointChecker()

	return (
		<header className="fixed top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[2.12rem] pr-4.5 pl-3.5 pt-0.5 pb-0.5 shadow-md/16 shadow-black border-green-500 lg:h-[3.2rem] lg:pl-6 lg:pr-9.5">
			<Image
				src={isMobile ? Logo2 : Logo1}
				alt="logo"
				className="block w-25 mb-1 object-contain lg:w-38 lg:pt-1 lg:mb-0"
				loading="eager"
			/>
			{isMobile ? <MobileNavbar /> : <DesktopNavbar />}
		</header>
	)
}
