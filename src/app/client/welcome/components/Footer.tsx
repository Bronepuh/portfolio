import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <Link href="#">
            Bronepuh<span>.</span>
          </Link>
        </p>

        <p className="copyright">
          &copy; 2025{' '}
          <a
            href="https://t.me/bronepuh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bronepuh Services
          </a>
          . All rights reserved
        </p>
      </div>
    </footer>
  );
}
