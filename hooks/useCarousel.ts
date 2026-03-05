import { useEffect, useState } from 'react'

export const useCarousel = (
	length: number,
	forwardTimeout: number,
	intervalTimeout: number
) => {
	const [idx, setIdx] = useState(0)
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null

		const intervalId = setInterval(() => {
			setLoaded(false)

			timeoutId = setTimeout(() => {
				setIdx((prev) => (prev + 1) % length)
			}, forwardTimeout)
		}, intervalTimeout)

		return () => {
			clearInterval(intervalId)
			if (timeoutId !== null) clearTimeout(timeoutId)
		}
	}, [length, forwardTimeout, intervalTimeout])

	return { idx, loaded, setLoaded }
}
