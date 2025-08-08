import { RiTwitterXLine, RiLinkedinFill, RiFacebookFill } from 'react-icons/ri';

export default function Hero() {
  return (
    <section className="hero" id="Домой">
      <figure className="hero-banner">
        <picture>
          <source srcSet="/portfolio-promo.png" media="(min-width: 768px)" />
          <source srcSet="/portfolio-promo.png" media="(min-width: 500px)" />
          <img
            src="/portfolio-promo.png"
            alt="A man with blue shirt"
            className="w-100"
            loading="lazy"
            width={300}
            height={300}
          />
        </picture>
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">Frontend разработчик</h2>
        <a href="#Контакты" className="btn btn-primary">
          Контакты
        </a>
      </div>

      <ul className="hero-social-list">
        {[
          { icon: <RiFacebookFill />, label: 'Facebook' },
          { icon: <RiTwitterXLine />, label: 'Twitter-X' },
          { icon: <RiLinkedinFill />, label: 'Linkedin' },
        ].map((social, index) => (
          <li key={index}>
            <a href="#" className="hero-social-link">
              {social.icon}
              <div className="tooltip">{social.label}</div>
            </a>
          </li>
        ))}
      </ul>

      <a href="#stats" className="scroll-down">
        Scroll
      </a>
    </section>
  );
}
