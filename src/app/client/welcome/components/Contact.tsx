"use client";

import React, { useState } from "react";
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoCopyOutline, IoCheckmarkCircle, IoPaperPlaneOutline } from "react-icons/io5";

export default function Contact() {
	const email = "darckday2010@gmail.com";
	const phone = "+79506649003";

	const tgHandle = "@vyatkin_denis_dev";
	const tgUrl = "https://t.me/vyatkin_denis_dev";

	const [copiedKey, setCopiedKey] = useState<"tg" | "email" | "phone" | null>(null);

	const copyToClipboard = async (value: string, key: "tg" | "email" | "phone") => {
		try {
			await navigator.clipboard.writeText(value);
			setCopiedKey(key);
			setTimeout(() => setCopiedKey(null), 1200);
		} catch {
			// ignore
		}
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
						<li className="contact-list-item">
							<div className="contact-item-icon">
								<IoLocationOutline size={20} />
							</div>
							<div className="wrapper">
								<h3 className="h4 contact-item-title">Адрес:</h3>
								<address className="contact-info">г. Санкт-Петербург, Россия</address>
							</div>
						</li>

						<li className="contact-list-item">
							<div className="contact-item-icon">
								<IoPaperPlaneOutline size={20} />
							</div>
							<div className="wrapper">
								<h3 className="h4 contact-item-title">Telegram:</h3>
								<a href={tgUrl} className="contact-info" target="_blank" rel="noopener noreferrer">
									{tgHandle}
								</a>
							</div>
						</li>

						<li className="contact-list-item">
							<div className="contact-item-icon">
								<IoCallOutline size={20} />
							</div>
							<div className="wrapper">
								<h3 className="h4 contact-item-title">Телефон:</h3>
								<a href={`tel:${phone}`} className="contact-info">
									+7(950) 664-90-03
								</a>
							</div>
						</li>

						<li className="contact-list-item">
							<div className="contact-item-icon">
								<IoMailOutline size={20} />
							</div>
							<div className="wrapper">
								<h3 className="h4 contact-item-title">Email:</h3>

								{/* НЕ кликабельно */}
								<span className="contact-info">{email}</span>
							</div>
						</li>
					</ul>
				</div>

				{/* Правая колонка (карточка) */}
				{/* Оставляю className="contact-form" чтобы твои существующие стили точно подошли */}
				<div className="contact-form" aria-label="Contact actions">
					<h3 className="h4" style={{ marginBottom: 12 }}>
						Быстрые действия
					</h3>

					<div style={{ display: "grid", gap: 10 }}>
						<a
							className="btn btn-primary"
							href={tgUrl}
							target="_blank"
							rel="noopener noreferrer"
							style={{ width: "100%", maxWidth: "unset", textAlign: "center" }}
						>
							Написать в Telegram
						</a>
					</div>

					<div style={{ marginTop: 18, display: "grid", gap: 14 }}>
						<CopyRow
							label="Telegram"
							value={tgHandle}
							copied={copiedKey === "tg"}
							onCopy={() => copyToClipboard(tgHandle, "tg")}
						/>
						<CopyRow
							label="Email"
							value={email}
							copied={copiedKey === "email"}
							onCopy={() => copyToClipboard(email, "email")}
						/>
						<CopyRow
							label="Телефон"
							value={phone}
							copied={copiedKey === "phone"}
							onCopy={() => copyToClipboard(phone, "phone")}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

function CopyRow({ label, value, copied, onCopy }: { label: string; value: string; copied: boolean; onCopy: () => void }) {
	return (
		<div className="copy-row">
			<div className="copy-row__meta">
				<div className="form-label" style={{ margin: 0, marginBottom: 6 }}>
					{label}
				</div>
				<div className="copy-row__value">{value}</div>
			</div>

			<button
				type="button"
				className={`copy-icon-btn ${copied ? "is-copied" : ""}`}
				onClick={onCopy}
				aria-label={`Скопировать ${label}`}
				title={`Скопировать ${label}`}
			>
				{copied ? <IoCheckmarkCircle size={18} /> : <IoCopyOutline size={18} />}
			</button>
		</div>
	);
}
