import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "./components/GoogleTagManager";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BPS",
	description: "Bronepuh Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					value={{ dark: "dark-theme", light: "light-theme" }}
				>
					{children}
				</ThemeProvider>

				<Suspense fallback={<div>Загрузка...</div>}>
					<GoogleAnalytics />
				</Suspense>
			</body>
		</html>
	);
}
