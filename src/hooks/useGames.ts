// Section 8- Building a Video Game Discovery App


// Lesson 10- Creating a Custom Hook for Fetching Games

// SITUATION.-
// The 'GameGrid' component is still involved in making HTTP requests, but its main purpose is to
// --- generate and provide markup to render the games and manage user interaction at a higher level.
// ->(1).- So, it´s better to create this custom hook to do the http requests to fetching games, provide
// --- the endpoint, manage error situations and other functions outside the scope of 'GameGrid'. This will
// --- help us make our code more modular and reusable and accord to separation of concerns. Then, we created a
// --- new 'folder' under 'src' called 'hooks' and created this new file called 'useGames.ts'

// 2.- we will create the 'useGames' function and export it from this componen
// 3.- In the 'GameGrid' component, we grab and remove the code from the "const [games, setGames] = useState..." 
// --- to the end of the "useEffect" hook and paste it here. (3.a).- Now solve the compilation errors importing the 
// --- state hook, and (3.b).- Move here also the definition of the 'Game' and 'FetchGamesResponse' interfaces 
// --- because are related to fetching the games, (3.c)-> then (Ctrl+.) the 'useEffect' hook from 'react' 
// --- and 'apiClient' from "../services/api-client"

// ->(4) Here we need to return our 'games' and 'error' useState variables, so we´ll create
// --- and return an object with two properties '{ games, error }' right after the end of the 'useEffect' hook,
// --- to solve the related compilation errors in the 'GameGrid' module. 
// *** NOTE.- We could also add the 'loading state', but we are going to implement it later in the project

// (5).- Go to the 'GameGrid' and ->(5) create a const destructured in an object '{ games, error }'
// --- to receive this properties from this hook, and also there do ->(5.a) Ctrl+. to import (Ctlr+.) the 'useGames'
// --- hook from "../hooks/useGames"

// ->(6).- From to the 'GameGrid' module comes that we need to create a 'const controller' 
// --- funtion as 'new AbortController()' to manage clean-up at the top of the 'useEffect' hook, and
// --- (6.a).- We need to pass the object { signal: controller.signal } as a second parameter 
// --- ... (right after the "/games" endpoint) when we fetch the 'games' in the 'useEffect' 
// --- 

// 7.- We forgot to add the 'dependencies' to our 'useEffect' hook to avoid the endless loop fetching for
// --- games

// 8.- And finally we´ll return the clean-up function (() => controller.abort) right after the 'apiClient' call, always inside
// --- of the 'useEffect' hook, and (8.a).- We´ll need to test the error asking if 'err' is an 'instanceof CanceledError',
// --- returning if it is, and showing the error if it isn´t

// NOW IS TIME TO COMMIT our code with the name of "Creatae a custom hook to fetch de games"

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {    // <-(3.b)
    id: string;
    name: string;
}
  
interface FetchGamesResponse {    // <-(3.b)
count: number;
results: Game[];
  }

const useGames = () => {    // <-(2)
    const [games, setGames] = useState<Game[]>([]);    // <-(3) Ctrl+. to import it,     // <-(3.a)
    const [error, setError] = useState("");
  
    useEffect(() => {    // <-(3.c) Ctrl+.
        const controller = new AbortController();   // <-(6)

      apiClient    // <-(3.c) Ctrl+.
        .get<FetchGamesResponse>("/games", { signal: controller.signal })   // <-(6.a)
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;   // <-(8.a)
            setError(err.message)
        });

        return () => controller.abort();  //<-(8)
    }, []);     // <-(7) insert dependencies as an empty array
  
    return { games, error };    // <-(4)
}

export default useGames;    // <-(2)
