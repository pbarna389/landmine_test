import type { PricesContentType } from '@/types'

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
					<h5 className="capitalize font-bold text-[15px] cursor-pointer select-none">
						{subText.title} {'>>'}
					</h5>
					<p className="whitespace-pre-line text-[12px] transition-all scale-y-0 origin-top max-h-0 duration-500 group-hover:scale-y-100 group-hover:max-h-100 group-active:scale-y-100 group-active:max-h-100 group-focus:scale-y-100 group-focus:max-h-100 ">
						{subText.content}
					</p>
				</div>
			)}
		</div>
	)
}
