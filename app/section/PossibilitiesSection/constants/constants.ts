import Image3 from '../Assets/fendi.webp'
import Image1 from '../Assets/kp1_t.png'
import Image2 from '../Assets/kp2_t.png'

export const POSSIBILITIES_CONTENT = {
	header: {
		title: 'irányok és lehetőségek',
		subTitle: 'gyakorlat-központúság'
	},
	content: {
		body: [
			{
				id: 'pos-content-body-1',
				text:
					'Könnyűzenei gitároktatás, mely bárki számára elérhető - megfizethető, emberi áron. Egyéni órák, személyes kontakt, jó élmények, klassz dalok, sok gitározás! :) \n Szeretettel várlak, ha',
				images: [
					{ src: Image1, alt: 'közérthető, rugalmas gitároktatás' },
					{ src: Image2, alt: 'gyakorlatközpontú gitároktatás' }
				]
			},
			{
				id: 'pos-content-body-2',
				text:
					'és egyénileg alakítható órákon szeretnél részt venni - akár egy szuper hobbinak tekinted a gitározást, akár csak kipróbálnád magad benne.'
			},
			{
				id: 'pos-content-body-3',
				text:
					'A zenetanulás kitartást és rugalmasságot kíván, így várhatunk hatékony és folyamatos fejlődést. Közös munkával, könnyed úton haladunk saját céljaid irányába, elkerülvén rossz technikákat, irányokat és felesleges köröket.\nMai zenei palettánk -és a zene iránt érdeklődők ízlése- annyira sokrétű, hogy nem szorítkozhatunk kötött tanmenetekre, konkrét stílusokra. Egy jó gitáros ma már sok mindenből, sokféleképpen tanulhat és meríthet, így kaphat átfogó képet a gitározás irányairól.',
				images: { src: Image3, alt: 'kép egy akusztikus hangszerről' }
			},
			{
				id: 'pos-content-body-4',
				text:
					'A gitározás sok örömet és színvonalas élményt nyújt, ami egyben egy remek hobbi is. Ahogyan az első akkordoktól eljutunk az első dalokig - az első daloktól az egyre komolyabb témákig - mind-mind egy szép folyamat részei. A zenélés gazdagít, vagy épp felszabadít, szórakoztat és elmélyít.'
			},
			{
				id: 'pos-content-body-5',
				header: '... miben más?',
				emoticon: '💡',
				text:
					'A tanításban (is) a dallamos, zenei, kifejező játékot és felfogást részesítem előnyben: az ízeket, a dalközpontúságot, a harmóniai gondolkodást, a komplett zenei egységet - a mai fúziós/technokrata lick-gitározás trendjei helyett.'
			}
		],
		quote: {
			text:
				'A hangok, az akkordok második nyelvvé váltak a számomra, és gyakran megesik, hogy ennek a nyelvnek a szókészletével fejezem ki az érzéseimet akkor, amikor a hétköznapi beszéddel kudarcot vallok.',
			author: 'Slash'
		}
	}
}

export type PossibilitiesBodyType = (typeof POSSIBILITIES_CONTENT)['content']
