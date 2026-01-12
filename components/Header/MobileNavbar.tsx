'use client'

import Image from 'next/image'

import { useState } from 'react'

import Logo2 from '@/public/logo2.png'

import { NAV_ELEMENTS } from '@/constants/constants'

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Image
				src={Logo2}
				alt="logo"
				className="block w-25 object-contain mb-1 lg:hidden"
				loading="eager"
			/>
			<div
				className={`block text-black relative w-4 h-4 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-gray-700 before:rounded ${isOpen ? 'before:-rotate-45 before:top-1/2' : ''} before:transition after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gray-700 after:rounded after:bottom-0 after:transition ${isOpen ? 'after:rotate-45 after:top-1/2' : ''} lg:hidden`}
				onClick={handleClick}
			>
				<span
					className={`bg-gray-700 absolute transform -translate-1/2 top-1/2 left-1/2 h-0.5 w-full transition rounded ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				/>
			</div>
			<nav
				className={`absolute z-1 top-8.5 right-0 w-[calc(100vw*0.7)] bg-emerald-600 origin-right transition  ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
			>
				<ul className="flex flex-col justify-center items-center lg:gap-5.25 lg:text-black">
					{NAV_ELEMENTS.map((el) => (
						<li
							className="relative font-montserrat uppercase text-[16.4px] font-bold tracking-[2px] h-full leading-10 text-base hover:text-hover transition-all duration-300 cursor-pointer before:absolute before:content-[''] before:w-full before:top-1/4 before:left-0 before:bg-transparent before:transition-all before:duration-300 hover:before:h-0.5 hover:before:bg-hover hover:before:-top-2  "
							key={`nav-${el}`}
						>
							{el}
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}
