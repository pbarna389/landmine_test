import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Header from '@/components/Header/Header'

import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
