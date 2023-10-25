// Section 8- Building a Video Game Discovery App

// Lesson 14- Getting Optimized Images

// ACTUAL SITUATION.-
// This images are pretty big, so in slow connections will take time to load them. In this lesson We are going 
// --- to learn how to convert them to smaller formats without loosing definition to increase speed up the page load.

// 1.- In chrome developer tools we can go to the "network" tab, the choose the request, then we filter for "img"
// --- and copy the image URL appearing when left-mouse-button and "copy image URL" and paste it in the browser.
// --- You will see the image (a big one) and if you insert a (crop parameter) dimension separated 
// --- by "/" (crop/600/400/) right after the "media.rawg.io/media/" it will get a smaller image that we can 
// --- use instead of the big one

// 2.- But we don´t want our insert this functionality in our 'GameCard' component, because it´s a distraction;
// --- So, to do this we will create a new utility/service to modify the image URL (with the crop parameter) 
// --- called "image-url.ts" in the 'services' folder, and now go to there -(2)->

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
    metacritic: number
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
