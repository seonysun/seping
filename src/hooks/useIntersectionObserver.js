/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

const useIntersectionObserver = ({ hasNextPage, fetchNextPage }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return observerRef;
};

export default useIntersectionObserver;
