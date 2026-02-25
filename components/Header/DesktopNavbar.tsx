import { IconContext } from 'react-icons'

import { NAV_ELEMENTS, NAV_ICONS_DESKTOP } from './constants'

import { Icons } from '../Icons/Icons'

export const DesktopNavbar = () => {
	return (
		<>
			<nav className="hidden lg:flex gap-8.5">
				<ul className="flex lg:gap-5.25 lg:text-black">
					{NAV_ELEMENTS.map((el) => (
						<li
							className="relative font-montserrat uppercase text-[16.4px] font-bold tracking-[2px] h-full flex items-center text-base transition-all duration-300 cursor-pointer select-none hover:text-hover active:text-hover before:absolute before:content-[''] before:w-full before:scale-x-0 before:origin-right before:h-0.5 before:bottom-0 before:left-0 before:transition-transform before:bg-hover hover:before:w-full hover:before:scale-x-100 hover:before:origin-left active:before:scale-x-100 active:before:w-full active:before:origin-left focus:before:scale-x-100 focus:before:w-full focus:before:origin-left"
							key={`nav-${el}`}
						>
							{el.text}
						</li>
					))}
				</ul>
				<div className="flex gap-1.5 items-center *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
					<IconContext value={{ size: '28' }}>
						<Icons iconVars={NAV_ICONS_DESKTOP} />
					</IconContext>
				</div>
			</nav>
		</>
	)
}
