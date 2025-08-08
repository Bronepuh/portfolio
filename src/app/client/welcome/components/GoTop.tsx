export default function GoTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#top"
      className="go-top active"
      data-go-top
      title="Go to Top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <span>↑</span>
    </a>
  );
}
