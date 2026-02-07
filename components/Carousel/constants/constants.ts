import Image1 from '../assets/mm01.webp'
import Image2 from '../assets/mm02.webp'
import Image3 from '../assets/mm03.webp'

export const CarouselData = [
	{
		id: 1,
		img: Image1,
		text1: ['Gyakorlat-központú', 'gitárórák'],
		text2: '• A sikerélményért és a zenélés öröméért',
		text3: '• Jó hangulatú órák, klassz dalok, sok gitározás'
	},
	{
		id: 2,
		img: Image2,
		text1: ['Rugalmas, alakítható', 'tanmenet'],
		text2: '• Közérthetően, lényegretörően, türelmesen',
		text3: '• Személyre szabott tanulás, igazodva az igényekhez'
	},
	{
		id: 3,
		img: Image3,
		text1: ['Értékes, színvonalas', 'hobbi'],
		text2: '• Teljesen kezdőknek és haladóknak is',
		text3: '• Tanulás akusztikus és elektromos gitáron egyaránt'
	}
]

export const CarouselTimeout = 7500
