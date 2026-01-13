import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      image: '/zvonilka-slide.png',
      title: 'Звонилка',
      date: 'сентябрь 2025',
      href: 'https://bronepuh.ru/zvonilka',
      desc: 'Сервис видеоконференций, работает стабильно даже когда все вокруг глушат.',
    },
    {
      image: '/Horix-slide.png',
      title: 'Бот-нумеролог Horix',
      date: 'декабрь 2025',
      href: 'https://t.me/horix_for_you_bot',
      desc: 'Telegram-бот на собственном движке: точные расчёты, профессиональный уровень, подключена оплата.',
    },
    {
      image: '/AW-slide.png',
      title: 'Интерфейсы Armored Warfare',
      date: 'июль 2024',
      href: 'https://armoredwarfare.com/en',
      desc: 'Разработка/поддержка игровых UI-интерфейсов для проекта Armored Warfare.',
    },
    {
      image: '/YG-slide.png',
      title: 'Игра "Раскраска"',
      date: 'январь 2026',
      href: 'https://yandex.ru/games/app/razvivaiushchaia-raskraska-483174?utm_source=game_popup_menu',
      desc: 'Детская игра-раскраска для Яндекс.Игр: интерактивные сцены, оптимизация, UX под мобильные.',
    },
  ];

  return (
    <div className="container">
      <section className="project" id="Портфолио">
        <ul className="project-list">
          <li>
            <div className="project-content section-content">
              <p className="section-subtitle">Мои работы</p>
              <h2 className="h3 section-title">
                Проекты, которые можно посмотреть
              </h2>

              {/* переносы строк + аккуратная разметка */}
              <div className="section-text">
                <ul className="project-desc-list">
                  {projects.map((p) => (
                    <li key={p.href}>
                      <strong>{p.title}</strong> — {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.href}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="card-banner">
                  <Image
                    width={500}
                    height={200}
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">{project.title}</h3>
                  <time
                    className="publish-date"
                    dateTime={project.date.replace(' ', '-')}
                  >
                    {project.date}
                  </time>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* локальные стили только для списка описаний */}
        <style jsx>{`
          .project-desc-list {
            margin: 0;
            padding-left: 18px;
            display: grid;
            gap: 10px;
          }
          .project-desc-list li {
            color: var(--color-secondary);
            line-height: 1.7;
          }
          .project-desc-list strong {
            color: var(--color-primary);
            font-weight: 700;
          }
        `}</style>
      </section>
    </div>
  );
}
