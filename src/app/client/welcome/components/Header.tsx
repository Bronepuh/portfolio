"use client";

import Link from "next/link";

type HeaderProps = {
	theme: "light" | "dark";
	mounted: boolean;
	isHeaderActive: boolean;
	isNavOpen: boolean;
	toggleNav: () => void;
	toggleTheme: () => void;
};

export default function Header({ theme, mounted, isHeaderActive, isNavOpen, toggleNav, toggleTheme }: HeaderProps) {
	const isLight = mounted && theme === "light";

	return (
		<header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
			<div className="container">
				<h1 className="h1 logo">
					<Link href="#">
						Bronepuh<span>.</span>
					</Link>
				</h1>

				<div className="navbar-actions">
					<button
						type="button"
						suppressHydrationWarning
						className={`theme-btn ${isLight ? "active" : ""}`}
						onClick={toggleTheme}
						aria-label="Change Theme"
						title="Change Theme"
					>
						<span className="icon" />
					</button>
				</div>

				<button
					type="button"
					className={`nav-toggle-btn ${isNavOpen ? "active" : ""}`}
					onClick={toggleNav}
					aria-label="Toggle Menu"
					title="Toggle Menu"
				>
					<span className="one" />
					<span className="two" />
					<span className="three" />
				</button>

				<nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
					<ul className="navbar-list">
						{["Домой", "Обо мне", "Навыки", "Портфолио", "Контакты"].map((item) => (
							<li key={item}>
								<a href={`#${item}`} className="navbar-link" onClick={toggleNav}>
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
