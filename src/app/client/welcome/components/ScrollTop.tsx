import { usePortfolioUI } from '@/app/hooks/usePortfolioUI';
import { IoArrowUp } from 'react-icons/io5'; // Ionicons в react-иконках

const ScrollTop = () => {
  const { showGoTop } = usePortfolioUI();

  return (
    <a
      href="#top"
      className={`go-top ${showGoTop ? 'active' : ''}`}
      data-go-top
      title="Go to Top"
    >
      <IoArrowUp size={24} />
    </a>
  );
};

export default ScrollTop;
