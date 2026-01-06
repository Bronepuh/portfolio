"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

import { usePortfolioUI } from "@/app/hooks/usePortfolioUI";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import Portfolio from "./components/Portfolio";

export default function WelcomePage() {
	const ui = usePortfolioUI();
	const { resolvedTheme, setTheme } = useTheme();

	// ВАЖНО: пока не смонтировались — не доверяем resolvedTheme
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const headerTheme = useMemo<"light" | "dark">(() => {
		if (!mounted) return "dark"; // SSR+первый клиентский рендер совпадают
		return resolvedTheme === "light" ? "light" : "dark";
	}, [mounted, resolvedTheme]);

	const toggleTheme = () => {
		// можно и до mounted, но логичнее после
		const next = headerTheme === "dark" ? "light" : "dark";
		setTheme(next);
	};

	return (
		<>
			<Header
				theme={headerTheme}
				mounted={mounted}
				isHeaderActive={ui.isHeaderActive}
				isNavOpen={ui.isNavOpen}
				toggleNav={ui.toggleNav}
				toggleTheme={toggleTheme}
			/>

			<main>
				<Hero />
				<Stats />
				<About />
				<Skills skillsTab={ui.skillsTab} toggleSkillsTab={ui.toggleSkillsTab} />
				<Portfolio />
				<Contact />
			</main>

			<Footer />
			{ui.showGoTop && <GoTop />}
		</>
	);
}
