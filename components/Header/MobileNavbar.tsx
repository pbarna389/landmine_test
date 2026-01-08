'use client'

import { useState } from 'react'

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		console.log('clicked!')
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div
				className={`block text-black relative w-4 h-4 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-gray-700 before:rounded ${isOpen ? 'before:-rotate-45 before:top-1/2' : ''} before:transition after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gray-700 after:rounded after:bottom-0 after:transition ${isOpen ? 'after:rotate-45 after:top-1/2' : ''} lg:hidden`}
				onClick={handleClick}
			>
				<span
					className={`bg-gray-700 absolute transform -translate-1/2 top-1/2 left-1/2 h-0.5 w-full transition rounded ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				/>
			</div>
			<nav
				className={`absolute z-1 top-8.5 right-0 w-screen bg-emerald-600 origin-right transition  ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
			>
				Nav
			</nav>
		</>
	)
}
