// Section 8- Building a Video Game Discovery App

// Lesson 12- Displaying Platform Icons

// SITUATION HERE.- To display the platform icons, we need to inspect the http requests we sent to the server.
// ... In thre 'preview' tab we´ll see the results object returned and inspecting one game you´ll find the property 
// --- 'current_platform' (array), you will see up to 6 platform property objects. We will use this property

// 1.- First we need to add the property 'current_platform' to our 'Game' interface, but also ->(1.a) need to define 
// ... a 'Platform' interface to define the shape of a 'platform' object, because 'parent_platform' is not an array,
// --- but an array of objects of in which each object has a property called 'platform:' of the shape/type 'Platform'

// 2.- Now go to the 'GameCards' component to implement this feature, step by step.

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {    // <-(1.a)
  id: number,
  name: string,
  slug: string
}

export interface Game {   
    id: string;
    name: string;
    background_image: string,
    parent_platforms:  { platform: Platform }[]  // <-(1),   <-(1.a)
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
