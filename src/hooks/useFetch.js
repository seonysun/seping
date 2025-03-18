import { useCallback, useEffect, useState } from 'react';

const useFetch = (fetchAPI, deps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const memoizedFetchAPI = useCallback(fetchAPI, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await memoizedFetchAPI();
        setData(response.data.products);
      } catch (error) {
        console.error('API 호출 에러:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [memoizedFetchAPI, deps]);

  return { data, loading };
};

export default useFetch;
