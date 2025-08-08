import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      image: '/AW-slide.png',
      title: 'Интефейсы Armored Warfare',
      date: 'Июль 2024',
      href: 'https://armoredwarfare.com/en',
    },
    {
      image: '/YG-slide.png',
      title: 'Игра "Цветочный Магазин"',
      date: 'Сентябрь 2024',
      href: 'https://yandex.ru/games/app/334999?utm_source=game_popup_menu',
    },
    {
      image: '/shar-2.jpg',
      title: 'Мобильное приложение "Шар судьбы"',
      date: 'Декабрь 2023',
      href: 'https://store.nashstore.ru/store/62c844070a39b24f4f808248',
    },
  ];

  return (
    <div className="container">
      <section className="project" id="Портфолио">
        <ul className="project-list">
          <li>
            <div className="project-content section-content">
              <p className="section-subtitle">Мои работы</p>
              <h2 className="h3 section-title">Посмотри на эти проекты!</h2>
              <p className="section-text">
                От лендинга до сложного веб-приложения — делаю интерфейсы,
                которые работают быстро, выглядят отлично и масштабируются без
                боли.
              </p>
            </div>
          </li>

          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.href} className="project-card" target="_blank">
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

          {/* <li>
            <button className="load-more">Load More Works</button>
          </li> */}
        </ul>
      </section>
    </div>
  );
}
