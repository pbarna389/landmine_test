type QuoteProps = {
	author: string
	text: string
}

export const Quote = ({ text, author }: QuoteProps) => {
	return (
		<div className="hidden pr-1.5 absolute transform overflow-hidden w-68 h-68 -translate-y-1/2 top-1/3 right-0 bg-quote text-black text-[14px] font-light clip-half-circle text-left lg:flex lg:flex-col lg:justify-center lg:items-end lg:gap-2 select-none cursor-default xl:pr-4.5 xl:font-normal xl:text-[15px] xl:pt-0 xl:w-80 xl:h-80">
			<p className="w-30 text-right">
				&quot;
				{text}
				&quot;
			</p>
			<cite>{author}</cite>
		</div>
	)
}
