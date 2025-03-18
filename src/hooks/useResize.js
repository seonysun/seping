import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = debounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 300);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useResize;
