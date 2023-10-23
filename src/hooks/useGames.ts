// Section 8- Building a Video Game Discovery App


// Lesson 11- Building Game Cards

// From the 'GameCards' component ->(3).- we come here to export the 'Game' interface to the other modules
// and (4)-> go to the 'GameCards' module to import it

// From the GameCards component ->(6.a) We need to add some more properties to the 'Game' interface:
// --- (6.a.1).- 'background_image: string' and we can use it in the 'src=' of the 'Image' component
// --- ... of the 'Card' component of the 'GameCards' component

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {   //<-(3) 'export' this interface to use it in 'GameCards' component
    id: string;
    name: string;
    background_image: string
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
  
    return { games, error };    // <-(4)
}

export default useGames;    // <-(2)
