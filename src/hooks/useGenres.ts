// Section 8- Building a Video Game Discovery App

// Lesson 17- Fetching the Genres

// ACTUAL SITUATION.- 
// Everything is working fine, so it´s time to start building our Aside panel where we eventually will place
// --- the list of Genres of the games, so when we click on a Genre, our GameGrid will only show the games
// --- pertaining to the choosen Genre.

// 1.- The first step will be fetching the Genres, so we create another component called 'GenreList.tsx' and then
// --- come here to define the 'useGenres' hook

// 2.- To fetch the genre, we created a hook like the one for fetching the games, so we´re going
// --- to the 'hooks' folder and create a file called 'useGenres' (this one) and define a function called 
// --- useGenres and export it

// 3.- This hook will be very similar to the 'useGames' hook, so to save time, will copy all the lines from that
// --- function and paste them into our new hook. We´ll need to import all the modules from 'React' and 
// --- from 'Axios' to avoid compilation errors. Note that we´ll end up with some code duplication, but will leave
// --- it this way for now. 

// 4.- We need to define a 'Genre' interface instead the 'Game' one and ispect the documentation of the 
// --- 'api.rawg.io/docs/' website to decide what properties will be incluede here. For now just need 2
// --- id: number and name: string, and >-(4.a)-> replace every reference to the 'Games' interface to 'Genre' 
// --- and >-(4.b)-> import the 'apiClient' function from './services/api-client'

// 5.- Then we need to create a 'FetchGenresResponse' interface to substitute the 'FetchGamesResponse' 
// --- with a couple of properties: count: number, and results: Genre[], and >-(5.a)-> replace the 
// --- reference to this interface.

// 6.- We now go to the 'GenreList' component to >-(6)-> insert the <useGenres> new component

import { CanceledError } from "axios";
import { useEffect, useState } from "react";
// >-(4.b)-> import the 'apiClient' function 
import apiClient from "../services/api-client";

// >-(4)-> Define the 'Genres' interface 
interface Genre {
    id: number,
    name: string
}
// >-(5)-> Define the 'FetchGenresResponse' interface 
interface FetchGenresResponse {
    count: number,
    results: Genre[]
}

// >-(3)-> Copy and paste the 'useGames' function. 
const useGenres = () => {
    // >-(4.a)-> replace 'Game' to 'Genre' or 'genres' or 'Genres' where found
    const [genres, setGenres] = useState<Genre[]>([]);   
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);   
    
    useEffect(() => {    
      const controller = new AbortController();   
      
      setLoading(true);   
        apiClient    
        // >-(5.a)-> replace the reference with the new 'FetchGenresResponse' interface, the endpoint to '/genres'
        // --- and the 'setGames' to 'setGenres'
          .get<FetchGenresResponse>("/genres", { signal: controller.signal })   
          .then((res) => {
            setGenres(res.data.results);
            setLoading(false);   
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;   
          setError(err.message)
          setLoading(false);   
          });
  
          return () => controller.abort();  
      }, []);     
    
      return { genres, error, isLoading };   
  }

export default useGenres;