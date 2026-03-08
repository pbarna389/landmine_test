import { Heading } from '@/components'
import { VIDEOS_CONTENT } from './constants/constants'

import { VideoMainSection } from './sections'

export default function VideosPage() {
	const { title, textContent } = VIDEOS_CONTENT

	return (
		<main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-raleway *:text-black">
			<VideoMainSection>
				<div className="flex w-full justify-center items-center md:justify-end md:basis-1/2">
					<div className="flex flex-col gap-10 lg:w-1/2 *:text-center *:lg:text-start">
						<Heading
							text={title.text}
							className="text-[48px] lg:text-[62px] text-white capitalize lg:text-black"
						/>
						<h2 className="text-2xl text-white capitalize lg:text-black">{title.subtext}</h2>
						<article>{textContent.text}</article>
					</div>
				</div>
			</VideoMainSection>
		</main>
	)
}
