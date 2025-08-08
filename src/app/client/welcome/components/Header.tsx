import Link from 'next/link';

type HeaderProps = {
  theme: string; // Добавьте это
  isHeaderActive: boolean;
  isNavOpen: boolean;
  toggleNav: () => void;
  toggleTheme: () => void;
};

export default function Header({
  theme, // Добавьте это
  isHeaderActive,
  isNavOpen,
  toggleNav,
  toggleTheme,
}: HeaderProps) {
  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <Link href="#">
            Bronepuh<span>.</span>
          </Link>
        </h1>

        <div className="navbar-actions">
          {/* <select name="language" id="lang">
            <option value="ru">Ру</option>
            <option value="en">En</option>
          </select> */}

          <button
            className={`theme-btn ${theme === 'light-theme' ? 'active' : ''}`}
            onClick={toggleTheme}
            aria-label="Change Theme"
            title="Change Theme"
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`}
          onClick={toggleNav}
          aria-label="Toggle Menu"
          title="Toggle Menu"
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            {['Домой', 'Обо мне', 'Навыки', 'Портфолио', 'Контакты'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="navbar-link"
                    onClick={toggleNav}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
