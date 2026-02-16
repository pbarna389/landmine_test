import { useEffect, useState } from 'react'

export const useCarousel = (length: number, subTimeout: number, mainTimeout: number) => {
	const [idx, setIdx] = useState(0)
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		const intervalId = setInterval(() => {
			setLoaded(false)

			timeoutId = setTimeout(() => {
				setIdx((prev) => (prev + 1) % length)
			}, subTimeout)
		}, mainTimeout)

		return () => {
			clearInterval(intervalId)
			if (timeoutId !== null) clearTimeout(timeoutId)
		}
	}, [length, subTimeout, mainTimeout])

	return { idx, loaded, setLoaded }
}
