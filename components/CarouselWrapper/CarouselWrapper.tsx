'use client'

import { useEffect } from 'react'

import { useCarousel } from '@/hooks/useCarousel'

type CarouselWrapperProps<TData extends object> = {
	carouselData: TData[]
	components: {
		BaseComponent: React.FunctionComponent<TData & { loadState?: boolean }>
		ParentComponent?: {
			component: React.FunctionComponent<
				React.PropsWithChildren & {
					loadState: boolean
				}
			>
		}
	}
	timers: {
		animationTimeout: number
		intervalTimeout: number
	}
}

export const CarouselWrapper = <TItem extends object>({
	components,
	timers,
	carouselData
}: CarouselWrapperProps<TItem>) => {
	const { BaseComponent, ParentComponent } = components

	const { animationTimeout, intervalTimeout } = timers

	const { idx, loaded, setLoaded } = useCarousel(
		carouselData.length,
		animationTimeout,
		intervalTimeout
	)

	const selectedData = carouselData[idx]

	useEffect(() => {
		const timeout = setTimeout(() => setLoaded(true), 0)

		return () => clearTimeout(timeout)
	}, [setLoaded, idx, animationTimeout])

	if (ParentComponent) {
		return (
			<ParentComponent.component loadState={loaded}>
				<BaseComponent {...selectedData} />
			</ParentComponent.component>
		)
	}

	return <BaseComponent loadState={loaded} {...selectedData} />
}
