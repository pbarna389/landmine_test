'use client'

import { useEffect, useEffectEvent, useState } from 'react'

/**
 * Hook to track if the viewport is below a given breakpoint.
 * @param breakpoint - the max-width in pixels to check
 */

export const useBreakpointChecker = (breakpoint = 1280) => {
	const [isBelow, setIsBelow] = useState(false)

	const handleChange = useEffectEvent((matches: boolean) => {
		setIsBelow(matches)
	})

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

		handleChange(mediaQuery.matches)

		const listener = (e: MediaQueryListEvent) => handleChange(e.matches)

		mediaQuery.addEventListener('change', listener)

		return () => mediaQuery.removeEventListener('change', listener)
	}, [breakpoint])

	return isBelow
}
