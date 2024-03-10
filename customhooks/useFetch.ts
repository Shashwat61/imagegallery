import { PhotosData } from "@/components/carousel/CarouselViewer";
import { useState, useEffect } from "react";
interface ConfigParams {
  url: string;
  options?: ConfigOptions;
}
interface ConfigOptions {
  headers: Headers;
  method: "GET" | "POST";
}

const options = {
  headers: new Headers({
    Accept: "application/json",
    "Accept-Version": "v1",
  }),
  method: "GET",
};
interface FetchResponseInterface{
  data :PhotosData[] | null
  error: Error | null,
  loading: boolean
}
const useFetch = (config: ConfigParams) => {
  const [data, setData] = useState<PhotosData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(config.url, {...options, ...config.options});

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData.results);
      } catch (error) {
        let errorMessage = "An error occurred while trying to fetch the data.";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [config.url]); // Dependency array: refetches data if the URL changes

  return { data, loading, error };
};

export default useFetch;
