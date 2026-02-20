type QuoteProps = {
	author: string
	text: string
}

export const Quote = ({ text, author }: QuoteProps) => {
	return (
		<div className="hidden pt-4 pr-1.5 absolute transform overflow-hidden h-66 w-66 -translate-y-1/2 top-1/3 right-0 bg-quote text-black text-[14px] font-light clip-half-circle text-left lg:flex lg:flex-col lg:justify-start lg:items-end lg:gap-2 select-none cursor-default">
			<p className="w-30 text-right">
				&quot;
				{text}
				&quot;
			</p>
			<cite>{author}</cite>
		</div>
	)
}
