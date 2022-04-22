import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => {
        setResponse(resp.data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { response, isLoading, error };
};

export default useFetch;
