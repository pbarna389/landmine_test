/*
{
  title: 'folyamatok',
    subTitle: {
    emotiocon: '✓',
      text: 'keződdel'
  },
  image: {
    src: Image4,
      caption: 'Tanulás elektromoson vagy akusztikuson'
  },
  text:
  '... egy általános alapozás közben máris zenélve tanulhatsz: a különböző alapgyakorlatok ill. ízlés szerint válogatott egyszerűbb dalok magukban foglalják a modern könnyűzene alapvető elemeit, fogásait is...\n Az órák teljesen dalközpontúak, hiszen a hobbi-zenélésben a sikerélmény és a zenélés örömei a legfontosabbak. Ezzel párhuzamosan az elmélet alapjait is érinthetjük, velősen, lényegre törően, hogy ne teherré, hanem hasznos segédünkké váljon. \n Kezdetben a hangszer alapos megismerése és megszeretése a lényeg. Hogy örömmel ülj le gitározni, hogy láss összefüggéseket, hogy önállósodj. A tanulás menetét, folyamatát igényeid szerint aktívan alakíthatod -én ebben leszek a partnered. \n Akár az otthoni zeneszerkesztés- és felvétel praktikáit is érinthetjük..',
    link: {
    text: 'tanácsok kezdőknek',
      href: null
  }
}
*/

import Link from 'next/link'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import type { PossibilitiesDetailsType } from './constants/constants'
import type { ArrayElementType } from '@/types'

type PossibilitiesDetailProps = {
	content: ArrayElementType<PossibilitiesDetailsType>
	idx: number
}
export const PossibilitiesDetail = ({
	content: { title, subTitle, image, text, link },
	idx
}: PossibilitiesDetailProps) => {
	const isOddElement = idx % 2 !== 0

	return (
		<div
			className={`w-37/40 flex ${isOddElement ? 'flex-row-reverse' : 'flex-row'} gap-12 justify-start items-start p-8 bg-section-detail rounded relative`}
		>
			<div className="basis-9/20">
				{title && (
					<h3 className="capitalize font-bold text-3xl p-3 border border-black absolute -top-1.5 left-8">
						{title}
					</h3>
				)}
				<div className="mt-13 relative group">
					<RotatableImage
						src={image.src}
						rotateLeft={isOddElement ? true : false}
						className={'h-64.5 rounded-lg'}
					/>
					<p
						className={`absolute w-fit capitalize text-[15px] text-justify -bottom-7.5 ${isOddElement ? 'right-0' : 'left-0'} z-0 opacity-100 cursor-default select-none lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 text-sm lg:opacity-0 lg:-bottom-5 lg:${isOddElement ? 'right-0' : 'left-0'}`}
					>
						{image.caption}
					</p>
				</div>
			</div>
			<div className="basis-11/20 text-justify space-y-7.5">
				<h4 className="uppercase text-start text-[19px]">
					{subTitle.text} <span>{subTitle.emoticon}</span>
				</h4>
				<p className="whitespace-pre-line text-[15px] leading-4">{text}</p>

				<Link
					className="capitalize text-[16px] p-1.5 border border-hover w-fit rounded transition-colors bg-transparent duration-300 hover:bg-hover hover:text-white active:bg-hover active:text-white focus:bg-hover focus:text-white target:bg-hover target:text-white focus-visible:bg-hover focus-visible:text-white focus-visible:border-2 focus-visible:border-black focus-visible:"
					href={''}
					target="_blank"
				>
					{link.text}
				</Link>
			</div>
		</div>
	)
}
