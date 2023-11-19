import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacters(url, serach) {
  const [isLoading, setIsLoading] = useState(false);
  const [allCharacters, setallCharacters] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}=${serach}`, { signal });
        setallCharacters(data.results.slice(0, 5));
      } catch (error) {
        if (!axios.isCancel()) {
          setallCharacters([]);
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [serach]);
  return { isLoading, allCharacters };
}
