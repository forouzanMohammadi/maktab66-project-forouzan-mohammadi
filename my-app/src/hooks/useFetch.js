import { AdminApis } from 'service/AdminApis';
import { useEffect, useState } from "react";


const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve("delay"), 2000));
};

const useFetch = (url, config  = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await AdminApis.getProducts(url);
        await delay();
        setData(response);
  
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {data, loading, error };
};

export { useFetch };