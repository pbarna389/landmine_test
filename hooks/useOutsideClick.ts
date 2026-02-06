import { useEffect, useRef } from 'react'

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
	const ref = useRef<T | null>(null)

	useEffect(() => {
		const handler = (e: PointerEvent) => {
			if (!ref.current) return

			if (!(e.target instanceof Node)) return

			if (!ref.current.contains(e.target)) {
				callback()
			}
		}

		document.addEventListener('pointerdown', handler)

		return () => {
			document.removeEventListener('pointerdown', handler)
		}
	}, [callback])

	return ref
}
