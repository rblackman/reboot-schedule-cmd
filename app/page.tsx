import throwError from '@helpers/throwError';
import type { Metadata } from 'next';
import HomepageRecoilRoot from './homepageRecoilRoot';

const url = process.env.NEXT_PUBLIC_URL ?? throwError('NEXT_PUBLIC_URL is not defined');
const title = process.env.NEXT_PUBLIC_SITE_NAME ?? throwError('NEXT_PUBLIC_SITE_NAME is not defined');
const description = 'A quick tool to copy a reboot command for rebooting at a specific time.';
const descriptionLong =
	'This is a quick utility to help reboot a server at a specific time. Specify a time and then copy the command to the clipboard. If you are rebooting a lot of servers, you can fuzz the results by a set number of minutes to stagger reboot times.';

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title,
	description,
	manifest: '/manifest.json',
	themeColor: '#bbe1fa',
	openGraph: {
		type: 'article',
		title,
		images: '/og.png',
		description: descriptionLong,
		url,
		siteName: title
	}, twitter: {
		title,
		description: descriptionLong,
		images: '/og.png',
		creator: '@rblackman24'
	},
	formatDetection: {
		telephone: false,
		date: false,
		address: false,
		email: false,
	},
	icons: [
		{
			url: '/favicon.ico',
			rel: 'icon',
		},
		{
			type: 'apple-touch-icon',
			url: '/icon-180.png',
			sizes: '180x180'
		},
		{
			type: 'apple-touch-icon',
			url: '/icon-167.png',
			sizes: '167x167'
		},
		{
			type: 'mask-icon',
			url: '/icon-mono.svg',
			color: '#bbe1fa'
		},
		{
			type: 'shortcut icon',
			url: '/favicon.ico',
		},
		{
			type: 'maskable icon',
			url: '/icon-maskable-512.png',
			sizes: '512x512'
		}
	],
	appleWebApp: {
		title,
		capable: true,
		statusBarStyle: 'default'
	}
}

export default async function Home() {

	return (
		<HomepageRecoilRoot>
			<>
				<h1>Hello World</h1>
			</>
		</HomepageRecoilRoot>
	);
}
