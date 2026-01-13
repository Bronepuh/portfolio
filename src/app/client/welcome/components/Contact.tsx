"use client";

import React, { useMemo, useState } from "react";
import {
	IoLocationOutline,
	IoCallOutline,
	IoMailOutline,
	IoCopyOutline,
	IoCheckmarkCircle,
	IoPaperPlaneOutline,
	IoDownloadOutline,
} from "react-icons/io5";

type CopyKey = "tg" | "email" | "phone" | null;

export default function Contact() {
	const address = "г. Санкт-Петербург, Россия";

	const email = "darckday2010@gmail.com";
	const phoneRaw = "+79506649003"; // для tel: лучше в E.164
	const phonePretty = "+7 (950) 664-90-03";

	const tgHandle = "@vyatkin_denis_dev";
	const tgUrl = "https://t.me/vyatkin_denis_dev";

	const [copiedKey, setCopiedKey] = useState<CopyKey>(null);

	const copyToClipboard = async (value: string, key: Exclude<CopyKey, null>) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopiedKey(key);
			setTimeout(() => setCopiedKey(null), 1200);
		} catch {
			// ignore
		}
	};

	const items = useMemo(
		() => [
			{
				key: "address" as const,
				title: "Адрес",
				icon: <IoLocationOutline size={20} />,
				kind: "text" as const,
				value: address,
				copyValue: address,
				copyKey: null,
			},
			{
				key: "tg" as const,
				title: "Telegram",
				icon: <IoPaperPlaneOutline size={20} />,
				kind: "link" as const,
				value: tgHandle,
				href: tgUrl,
				copyValue: tgHandle,
				copyKey: "tg" as const,
			},
			{
				key: "phone" as const,
				title: "Телефон",
				icon: <IoCallOutline size={20} />,
				kind: "link" as const,
				value: phonePretty,
				href: `tel:${phoneRaw}`,
				copyValue: phoneRaw,
				copyKey: "phone" as const,
			},
			{
				key: "email" as const,
				title: "Email",
				icon: <IoMailOutline size={20} />,
				kind: "link" as const,
				value: email,
				href: `mailto:${email}`,
				copyValue: email,
				copyKey: "email" as const,
			},
		],
		[address, email, phonePretty, phoneRaw, tgHandle, tgUrl],
	);

	const downloadVCard = () => {
		// Минимальный vCard 3.0 — нормально открывается в большинстве контактов
		const vcf = [
			"BEGIN:VCARD",
			"VERSION:3.0",
			"N:Vyatkin;Denis;;;",
			"FN:Denis Vyatkin",
			`TEL;TYPE=CELL:${phoneRaw}`,
			`EMAIL;TYPE=INTERNET:${email}`,
			`URL:${tgUrl}`,
			"END:VCARD",
			"",
		].join("\r\n");

		const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "denis-vyatkin.vcf";
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="container">
			<section className="contact" id="Контакты">
				{/* Левая колонка */}
				<div className="contact-content section-content">
					<p className="section-subtitle">Контакты</p>
					<h2 className="h3 section-title">Связаться со мной</h2>
					<p className="section-text">Напиши в Telegram или сохрани контакты — отвечу максимально быстро.</p>

					<ul className="contact-list">
						{items.map((it) => (
							<li key={it.key} className="contact-list-item">
								<div className="contact-item-icon">{it.icon}</div>

								<div className="contact-item-body">
									<div className="contact-item-head">
										<h3 className="h4 contact-item-title">{it.title}</h3>

										{it.copyKey ? (
											<button
												type="button"
												className={`copy-icon-btn copy-icon-btn--sm ${copiedKey === it.copyKey ? "is-copied" : ""}`}
												onClick={() => copyToClipboard(it.copyValue, it.copyKey)}
												aria-label={`Скопировать ${it.title}`}
												title={`Скопировать ${it.title}`}
											>
												{copiedKey === it.copyKey ? <IoCheckmarkCircle size={18} /> : <IoCopyOutline size={18} />}
											</button>
										) : (
											<button
												type="button"
												className={`copy-icon-btn copy-icon-btn--sm ${copiedKey === "phone" ? "is-copied" : ""}`}
												onClick={() => copyToClipboard(it.copyValue, "phone")}
												aria-label={`Скопировать ${it.title}`}
												title={`Скопировать ${it.title}`}
												style={{ visibility: "hidden" }}
												tabIndex={-1}
											>
												<IoCopyOutline size={18} />
											</button>
										)}
									</div>

									{it.kind === "link" ? (
										<a
											className="contact-info contact-info--row"
											href={it.href}
											target={it.key === "tg" ? "_blank" : undefined}
											rel={it.key === "tg" ? "noopener noreferrer" : undefined}
										>
											{it.value}
										</a>
									) : (
										<address className="contact-info contact-info--row">{it.value}</address>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Правая колонка: быстрые действия без повторения значений */}
				<div className="contact-form contact-card" aria-label="Contact actions">
					<h3 className="h4 contact-card-title">Быстрые действия</h3>

					<div className="contact-card-actions">
						<a className="btn btn-primary" href={tgUrl} target="_blank" rel="noopener noreferrer">
							Написать в Telegram
						</a>

						<a className="btn btn-primary" href={`mailto:${email}`}>
							Написать на Email
						</a>

						<a className="btn btn-primary" href={`tel:${phoneRaw}`}>
							Позвонить
						</a>

						<button type="button" className="btn btn-secondary contact-save-btn" onClick={downloadVCard}>
							<IoDownloadOutline style={{ marginRight: 8 }} />
							Сохранить контакт (vCard)
						</button>
					</div>

					<div className="contact-hint">Нажми на значение слева, чтобы открыть. Нажми на иконку — чтобы скопировать.</div>
				</div>
			</section>
		</div>
	);
}
