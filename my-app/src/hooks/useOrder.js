// import { getDataGridUtilityClass } from "@mui/x-data-grid";
import { AdminApis } from "service/AdminApis";
import { useEffect, useState } from "react";

const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve("delay"), 3000));
};

const useOrder = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await AdminApis.orders(
        url, { headers: { token: localStorage.getItem("token") }}
      );
      await delay();
 
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
      getPosts();
  }, [url]);

  return {data, loading, error , getPosts};
};

export { useOrder };
