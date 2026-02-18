import Image1 from '../Assets/p1.png'
import Image2 from '../Assets/p2.png'
import Image3 from '../Assets/p3.png'

export const PRICES_CONTENT = {
	header: {
		title: 'helyszín és árak',
		subTitle: ''
	},
	content: [
		{
			title: 'helyszín',
			image: Image1,
			emoticon: '✅',
			subText:
				'• Közel a nagy csomópontokhoz: BAH, Széll Kálmán/Déli, Újbuda, stb., de a belváros is 10-15 perc alatt elérhető. \n• BKV: 8E busz 2 percre (Ferenciek tere-BAH-Kelenföld vonalon), 59-es villamos (Széll K. felől) pár perc. \n• Autóval a Hegyalja út felől. Ingyenes parkolási zóna!',
			subText_link: 'http://fos.hu/104l',
			subText_link_text: 'Térkép>>',
			text1:
				'A gitárórák helyszíne Budapest zöld szívében található, könnyen és gyorsan megközelíthető, barátságos helyen.',
			text2:
				'Időpontok bármikor: reggel, napközben vagy este. \n A gitárórák -szabad helytől függően- bármikor elkezdhetők, online is!',
			text3: null
		},
		{
			title: 'tandíj',
			image: Image2,
			emoticon: '✅',
			subText:
				'A tandíj havidíjas rendszerben működik, s nem óradíjas. Minden hónapban fix összeg (akárcsak egy bérlet esetén), mely kizárólag az adott hónapra érvényes. Az elmaradt alkalmak nem kerülnek visszatérítésre. Saját időpontot tartok fent mindenkinek - ez a havidíj alapja. \n Lemondott órák pótlására legfeljebb havi 1 alkalommal van lehetőség, eseti, megüresedő időpontban. (Általam lemondott órák, karácsony természetesen nem kerülnek felszámításra.) \n Az ár így kedvezőbb a minél rendszeresebben járóknak, és jóval az átlag-tarifa (8-10e/óra) alatt marad.',
			subText_link: null,
			subText_link_text: null,
			text1: 'A havidíj fix 18.000 ft, lejárt óráktól függetlenül. Befizetés: hónap elején.',
			text2: 'Heti 1 alkalom \n 5 hetes hónap esetén az ötödik órát ajándékba adom!',
			text3: 'Az órákra saját hangszert, füzetet hozni kell.'
		},
		{
			title: 'ingyenes első óra',
			image: Image3,
			subText: null,
			subText_link: null,
			subText_link_text: null,
			text1:
				'Az első óra ingyenes; egy rövid szintfelmérésből áll, valamint megbeszéljük a terveket, célokat, igényeket.',
			text2:
				'Tabokat/kottákat, videókat, elméleti részt, mp3-as alapokat és egyéb gitároktatás-segédanyagot minden órára biztosítok.',
			text3: null
		}
	]
}
