import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data.ts";
import { isNotNil } from "ramda";

interface UseApiProps<T> {
  url: string;
  initialData?: T;
}

export const useApi = <T,>({ url, initialData }: UseApiProps<T>) => {
  const [data, setData] = useState<T | null>(initialData || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const responseData = await fetchData(url);
        const { error } = responseData;
        if (isNotNil(error)) {
          setError(error);
          setLoading(false);
          return;
        }
        setError(undefined);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getData().then();
  }, [url]);

  return { data, loading, error };
};
