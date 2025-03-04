import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useResize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = debounce(() => {
    setIsMobile(window.innerWidth < 768);
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useResize;
