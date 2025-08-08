'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { RiTelegram2Fill, RiVkFill } from 'react-icons/ri';
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoPerson,
  IoMail,
  IoCall,
  IoChatbubbles,
  IoCheckmarkCircle,
  IoCloseCircle,
} from 'react-icons/io5';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_5nmviqy',
        'template_o1a4shx',
        formRef.current,
        'PQjRN2y_6UH_EUBCM'
      )
      .then(
        () => {
          setIsLoading(false);
          setNotification({
            show: true,
            type: 'success',
            message: 'Сообщение отправлено успешно!',
          });
          formRef.current?.reset();
        },
        (error) => {
          setIsLoading(false);
          setNotification({
            show: true,
            type: 'error',
            message: 'Ошибка при отправке сообщения. Попробуйте позже.',
          });
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    if (notification?.show) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="container">
      {/* Лоадер */}
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                border: '5px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                borderTopColor: '#fff',
                animation: 'spin 1s ease-in-out infinite',
                margin: '0 auto',
              }}
            ></div>
            <p
              style={{ marginTop: '15px', color: 'white', fontSize: '1.2rem' }}
            >
              Отправка...
            </p>
          </div>
        </div>
      )}

      {/* Уведомление */}
      {notification?.show && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            left: '50%',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transform: 'translateX(-50%)',
            minWidth: '300px',
            animation: 'fade-in 0.3s ease-out forwards',
            backgroundColor:
              notification.type === 'success' ? '#f0fdf4' : '#fef2f2',
            color: notification.type === 'success' ? '#166534' : '#b91c1c',
            border:
              notification.type === 'success'
                ? '1px solid #bbf7d0'
                : '1px solid #fecaca',
          }}
        >
          {notification.type === 'success' ? (
            <IoCheckmarkCircle
              style={{
                fontSize: '1.5rem',
                marginRight: '8px',
                color: '#16a34a',
              }}
            />
          ) : (
            <IoCloseCircle
              style={{
                fontSize: '1.5rem',
                marginRight: '8px',
                color: '#dc2626',
              }}
            />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      <section className="contact" id="Контакты">
        {/* Контактная информация */}
        <div className="contact-content section-content">
          <p className="section-subtitle">Контакты</p>
          <h2 className="h3 section-title">
            Вам нужен фронт? Шлите сообщение!
          </h2>
          <p className="section-text">
            Дайте знать, если Вам нужна помощь. Отправьте сообщение и я отвечу
            настолько быстро, насколько это возможно!
          </p>

          <ul className="contact-list">
            <li className="contact-list-item">
              <div className="contact-item-icon">
                <IoLocationOutline size={20} />
              </div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">Адрес:</h3>
                <address className="contact-info">
                  г. Санкт-Петербург, Россия
                </address>
              </div>
            </li>

            <li className="contact-list-item">
              <div className="contact-item-icon">
                <IoCallOutline size={20} />
              </div>
              <div className="wrapper">
                <h3 className="h4 contact-item-title">Телефон:</h3>
                <a href="tel:+79506649003" className="contact-info">
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
                <a href="mailto:darckday2007@mail.ru" className="contact-info">
                  darckday2007@mail.ru
                </a>
              </div>
            </li>

            <li>
              <ul className="contact-social-list">
                <li key={'Telegram'}>
                  <a
                    href="https://t.me/bronepuh"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tooltip">Telegram</div>
                    <RiTelegram2Fill />
                  </a>
                </li>
                <li key={'Vk'}>
                  <a
                    href="https://vk.com/id1346485"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tooltip">Vk</div>
                    <RiVkFill />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Форма */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-wrapper">
            <label htmlFor="name" className="form-label">
              Имя
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                className="input-field"
              />
              <IoPerson size={20} />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="johndoe@gmail.com"
                className="input-field"
              />
              <IoMail size={20} />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <div className="input-wrapper">
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                className="input-field"
              />
              <IoCall size={20} />
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="message" className="form-label">
              Сообщение
            </label>
            <div className="input-wrapper">
              <textarea
                name="message"
                id="message"
                className="input-field"
                required
                placeholder="Write your Message"
              ></textarea>
              <IoChatbubbles size={20} />
            </div>
          </div>
          <input type="hidden" name="to_email" value="darckday2007@mail.ru" />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </section>

      {/* Глобальные стили для анимаций */}
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
}
