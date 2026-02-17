import type { ArrayElementType } from '@/types'

import Image1 from '../Assets/experience.png'
import Image2 from '../Assets/flexibility.png'
import Image3 from '../Assets/pers_or_online.png'

export const PREMISE_CONTENT = {
	header: {
		title: 'amire számíthatsz',
		subTitle: 'tapasztalat és rugalmasság'
	},
	content: [
		{
			title: 'tapasztalat',
			image: Image1,
			text:
				'Immár 20 éves intenzív tanítási tapasztalattal, ill. Bp. egyik legkedvezőbb tandíjával várlak, jó hangulatú, minőségi órákra. Dolgozzunk együtt, valósítsuk meg közösen a céljaidat!'
		},
		{
			title: 'rugalmasság',
			image: Image2,
			text:
				'Gitároktatás kezdőknek, haladóknak - jelentkezés folyamatosan. Tanulj személyre szabott, gyakorlat-központú órákon! Nálam bármilyen stílusban tanulhatsz.'
		},
		{
			title: 'személyes vagy online',
			image: Image3,
			text:
				'Karanténos időkben, ill. a Budapesttől távol élőknek sem kell lemondani a gitározásról! A tanulás online videochat formában is jól működik, facebook-messenger vagy skype programokkal.'
		}
	]
}

export type PremiseContent = ArrayElementType<(typeof PREMISE_CONTENT)['content']>
