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
			emoticon: '✓',
			image: Image1,
			text:
				'Immár 20 éves intenzív tanítási tapasztalattal, ill. Bp. egyik legkedvezőbb tandíjával várlak, jó hangulatú, minőségi órákra.\n Dolgozzunk együtt, valósítsuk meg közösen a céljaidat!'
		},
		{
			title: 'rugalmasság',
			emoticon: '✓',
			image: Image2,
			text:
				'Gitároktatás kezdőknek, haladóknak - jelentkezés folyamatosan. Tanulj személyre szabott, gyakorlat-központú órákon! \n Nálam bármilyen stílusban tanulhatsz.'
		},
		{
			title: 'személyes vagy online',
			emoticon: '✓',
			image: Image3,
			text:
				'Karanténos időkben, ill. a Budapesttől távol élőknek sem kell lemondani a gitározásról! \n A tanulás online videochat formában is jól működik, facebook-messenger vagy skype programokkal.'
		}
	]
}

export type PremiseContentType = ArrayElementType<(typeof PREMISE_CONTENT)['content']>
