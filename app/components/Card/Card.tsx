import { CardBody } from './CardBody'

type CardProps = React.PropsWithChildren

export const Card = ({ children }: CardProps) => {
	return (
		<div className="flex flex-col min-w-1/2 max-w-3/4 text-center bg-white rounded shadow-lg p-5 brightness-100 transition-['brightness'] duration-150 hover:brightness-110 hover:shadow-2xl active:brightness-110 active:shadow-2xl sm:min-w-1/4 lg:w-1/4 lg:min-h-90 *:sm:text-center">
			{children}
		</div>
	)
}

Card.Body = CardBody
