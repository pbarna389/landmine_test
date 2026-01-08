'use client'

import { useEffect, useState } from 'react'

export const useBreakpointChecker = (breakpoint = 1280) => {
	const [isBelow, setIsBelow] = useState(() => {
		if (typeof window === 'undefined') return false

		return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches
	})

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

		const handleChange = (e: MediaQueryListEvent) => {
			setIsBelow(e.matches)
		}

		mediaQuery.addEventListener('change', handleChange)

		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [breakpoint])

	return isBelow
}
