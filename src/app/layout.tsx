import type { Metadata } from 'next'
import { IBM_Plex_Sans as FontSans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { cn } from '@/lib/utils'
import { ORIGIN_URL } from '@/lib/constants'
import Header from '@/components/home/header'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-sans',
})
export const metadata: Metadata = {
	title: 'SpeakEasyAI Demo',
	description:
		'Convert your video or voice into a Blog Post in seconds with the power of AI!',
	icons: {
		icon: '/icon.ico',
	},
	metadataBase: new URL(ORIGIN_URL),
	alternates: {
		canonical: ORIGIN_URL,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					<Header />
					<main>{children}</main>
					<Toaster />{' '}
				</body>
			</html>
		</ClerkProvider>
	)
}
