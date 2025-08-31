import { usePortfolioUI } from '@/app/hooks/usePortfolioUI';
import React from 'react';
import BongoCat from './BongoCat';

export default function About() {
  const { scrollToSection } = usePortfolioUI();

  // Обработчик скачивания резюме
  const downloadResume = () => {
    // Создаем временную ссылку
    const link = document.createElement('a');
    link.href = '/rezume1.pdf'; // Путь относительно public
    link.download = 'Denis_Vyatkin_Frontend_Developer.pdf'; // Имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <section className="about" id="Обо мне">
        <figure className="about-banner">
          <BongoCat />
        </figure>

        <div className="about-content section-content">
          <p className="section-subtitle">Обо мне</p>
          <h2 className="h2 section-title">
            Нужен Frontend разработчик? Давайте обсудим!
          </h2>
          <p className="section-text">
            Привет, я Денис Вяткин. Frontend-разработчик с 5+ годами опыта,
            специализируюсь на создании высоконагруженных React/TypeScript
            приложений. Моя миссия — превращать сложные бизнес-задачи в
            интуитивные интерфейсы с безупречной производительностью. Внедрение
            FSD-архитектуры для масштабируемых решений - Разработка сложных UI с
            тестовым покрытием (unit/e2e) - Работа в кросс-функциональных
            командах (fintech, gaming, BigData) Работал с такими технологиями:
            React, TypeScript, Next.js, Zustand, Redux, WebSockets, Docker,
            Nginx и др. Готов внести вклад в ваш проект своей экспертизой в
            оптимизации и создании поддерживаемых кодовых баз.
          </p>
        </div>

        <div className="btn-group">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%',
              gap: '20px',
            }}
          >
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('Контакты')}
            >
              Нанять меня
            </button>
            <button className="btn btn-primary" onClick={downloadResume}>
              Скачать Резюме
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
