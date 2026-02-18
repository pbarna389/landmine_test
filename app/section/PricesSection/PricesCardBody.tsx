import type { PricesContentType } from './constants/constants'

type PriceCardBodyProps = Omit<PricesContentType, 'image' | 'title'>

export const PricesCardBody = ({ emoticon, text, subText }: PriceCardBodyProps) => {
	return (
		<div className="p-5">
			{text.map((el) => (
				<p key={el} className="text-[15px] whitespace-pre-line pb-2">
					<span>{emoticon}</span>
					{el}
				</p>
			))}
			{subText && (
				<div>
					<h5 className="capitalize font-bold text-[15px]">
						{subText.title} {'>>'}
					</h5>
					<p className="whitespace-pre-line text-[12px] transition-all opacity-0 h-0 duration-250 group-hover:opacity-100 group-hover:h-37 group-active:opacity-100 group-active:h-37">
						{subText.content}
					</p>
				</div>
			)}
		</div>
	)
}
