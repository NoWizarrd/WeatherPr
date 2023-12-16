import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export default function useQuery<T>(url: string, config: AxiosRequestConfig) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);

    axios
      .get(url, config)
      .then((res) => {
        setData(res.data);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
