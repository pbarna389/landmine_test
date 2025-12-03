import type { Metadata, Viewport } from 'next'
import {
	Cuprum,
	Montserrat,
	Nunito,
	Open_Sans,
	Raleway,
	Rubik,
	Ubuntu
} from 'next/font/google'

import Header from '@/components/Header/Header'

import './globals.css'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin']
})

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin']
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1.0,
	maximumScale: 1.0
}

export const metadata: Metadata = {
	title: 'Gitároktatás - Gitártanár - Landmine',
	description:
		'Gitároktatás Budapesten vagy online! Gitártanár kezdőknek, haladóknak. Tanulj személyre szabott, gyakorlat-központú órákon!',
	keywords:
		'gitároktatás, gitártanár, budapest, online, kezdőknek, ár, landmine, személyre szabott, gyakorlat központú órák'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${raleway.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
