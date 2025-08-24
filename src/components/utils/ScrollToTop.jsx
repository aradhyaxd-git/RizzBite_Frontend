import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // This hook gets the current page's path
  const { pathname } = useLocation();

  // This hook runs every time the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;