'use client'

import Image from 'next/image'

import { useState } from 'react'

import Logo1 from '@/public/logo3.png'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { NAV_ELEMENTS, NAV_ICONS_MOBILE } from '@/constants/constants'

import { Icons } from '../Icons/Icons'

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleOutSideClick = () => {
		setIsOpen(false)
	}

	const ref = useOutsideClick<HTMLDivElement>(handleOutSideClick)

	return (
		<div ref={ref}>
			<div
				className={`block text-black relative w-4 h-4 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-gray-700 before:rounded ${isOpen ? 'before:-rotate-45 before:top-1/2' : ''} before:transition after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gray-700 after:rounded after:bottom-0 after:transition ${isOpen ? 'after:rotate-45 after:top-1/2' : ''}`}
				onClick={handleClick}
			>
				<span
					className={`bg-gray-700 absolute transform -translate-1/2 top-1/2 left-1/2 h-0.5 w-full transition rounded ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				/>
			</div>
			<nav
				className={`fixed flex flex-col items-center z-1 top-8.5 right-0 w-screen h-screen sm:w-[calc(100vw*0.7)] bg-white/93 origin-right transition opacity-95 *:brightness-115 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
			>
				<ul className="flex flex-col w-full justify-center items-center">
					{NAV_ELEMENTS.map((el) => (
						<li
							className="top-0 font-raleway p-1 pl-0 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer text-center"
							key={`nav-${el}`}
						>
							{el}
						</li>
					))}
				</ul>
				<Image src={Logo1} alt="logo" className="object-contain w-75 p-5" loading="eager" />
				<ul className="flex flex-col w-full justify-center items-center">
					{NAV_ICONS_MOBILE.map((el) => (
						<li
							className="top-0 font-raleway p-1 pl-1.5 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer text-center *:transition-all *:hover:scale-110 *:hover:brightness-125"
							key={`nav-${el}`}
						>
							<span className="flex w-full justify-center gap-1.5 items-center ">
								<Icons iconVars={el} />
								{el}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
