import { useEffect, useState } from "react";
import { Game } from "./useGames";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name:string;

}
interface FetchGenresResponse {
    count:number;
    results: Genre[];

}

const useGenres = () =>{
    const [genre, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() =>{
        const controller = new AbortController();

        setLoading(true);

        apiClient.get<FetchGenresResponse>('/genres',{ signal: controller.signal})
          .then(res => {
            setGenres(res.data.results)
            setLoading(false);
          })
          .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
          });
        return () => controller.abort();
    }, []);
    return { genre, error, isLoading };
   
};

export default useGenres;