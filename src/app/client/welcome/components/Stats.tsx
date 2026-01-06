import Image from "next/image";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Stats() {
	const statsData = [
		{
			icon: "/stats-card-icon-1.png",
			title: "5+",
			subtitle: "Лет Опыта",
		},
		{ icon: "/stats-card-icon-2.png", title: "-30%", subtitle: "Время загрузки / LCP" },
		{ icon: "/stats-card-icon-3.png", title: "100k+", subtitle: "Пользователей / месяц" },
	];

	return (
		<div className="container">
			<section className="stats" id="stats">
				<ul className="stats-list">
					{statsData.map((stat, index) => (
						<li key={index}>
							<a href="#" className="stats-card">
								<div className="card-icon">
									<Image src={stat.icon} alt={stat.subtitle} loading="lazy" width={40} height={40} />
								</div>
								<h2 className="h2 card-title">
									{stat.title}
									<strong>{stat.subtitle}</strong>
								</h2>
								<IoChevronForwardOutline size={20} />
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
