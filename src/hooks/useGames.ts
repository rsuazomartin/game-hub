// Section 8- Building a Video Game Discovery App

// Lesson 13- Displaying Critic Score

// ACTUAL SITUATION.-
// We need to add a critic´s score assigned as "metacritic: number" under the 'results' in the chrome dev tools 
// --- that we can find under object 'genres'. The color of this score goes lighter as higher.

// 1.- We start adding a new property to our Game interface called "metacritic: number"

// 2.- The we add a new component called 'CriticScore.tsx' under the 'components' folder

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {    
  id: number,
  name: string,
  slug: string
}

export interface Game {   
    id: string;
    name: string;
    background_image: string,
    parent_platforms:  { platform: Platform }[],
    metacritic: number  // <-(1)-
}
  
interface FetchGamesResponse {    
count: number;
results: Game[];
  }

const useGames = () => {    
    const [games, setGames] = useState<Game[]>([]);   
    const [error, setError] = useState("");
  
    useEffect(() => {    
        const controller = new AbortController();   

      apiClient    
        .get<FetchGamesResponse>("/games", { signal: controller.signal })   
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;   
            setError(err.message)
        });

        return () => controller.abort();  
    }, []);     
  
    return { games, error };    
}

export default useGames;    
