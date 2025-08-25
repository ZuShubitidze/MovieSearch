import type { Movie } from "@/interfaces/movie.interface";
import axios from "axios";
import { useEffect, useState } from "react";

function searchMovies(url: string) {
  const [data, setData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Movie>(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default searchMovies;
