"use client";

import { useEffect, useState } from "react";

type SkillsTab = "skills" | "tools";

export const usePortfolioUI = () => {
	const [showGoTop, setShowGoTop] = useState(false);
	const [isHeaderActive, setIsHeaderActive] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [skillsTab, setSkillsTab] = useState<SkillsTab>("skills");

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;
			setIsHeaderActive(scrollY >= 10);
			setShowGoTop(scrollY >= 10);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const toggleNav = () => {
		if (window.innerWidth < 990) {
			setIsNavOpen((prev) => !prev);
			document.body.classList.toggle("active");
		}
	};

	const toggleSkillsTab = () => {
		setSkillsTab((prev) => (prev === "skills" ? "tools" : "skills"));
	};

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};

	return {
		showGoTop,
		isHeaderActive,
		isNavOpen,
		toggleNav,
		skillsTab,
		toggleSkillsTab,
		scrollToSection,
	};
};
