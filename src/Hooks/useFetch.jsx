import { useState, useEffect } from "react";

const useFetch = (sendRequest, url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sendRequest) {
      fetchData();
    }
  }, [url, options, sendRequest]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
