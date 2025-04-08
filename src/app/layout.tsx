import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const consolas = localFont({
	src: "./fonts/Consolas.ttf",
	variable: "--font-consolas",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mlgrimoire.com"),
	title: "The ML Grimoire",
	description: "Foundations of AI: From First Principles to Practica",
	openGraph: {
		type: "website",
		title: {
			default: "The ML Grimoire",
			template: "%s | The ML Grimoire",
		},
		description:
			"A comprehensive and concise primer on Artificial Intelligence for everyone",
		siteName: "The ML Grimoire",
		images: [
			{
				url: new URL("/og.png", "https://mlgrimoire.com").toString(),
				width: 1200,
				height: 630,
				alt: "ML Grimoire",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "The ML Grimoire",
		description: "Foundations of AI: From First Principles to Practica",
		images: [
			{
				url: new URL("/og.png", "https://mlgrimoire.com").toString(),
				width: 1200,
				height: 630,
				alt: "The ML Grimoire",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${consolas.variable} antialiased`}>{children}</body>
		</html>
	);
}
