// Section 8- Building a Video Game Discovery App

// Lesson 18- Creating a Generic Data Fetching Hook

// ACTUAL SITUATION.- 
// As we have seen, there are now 2 almost identical data fetching hooks, one for games and other for genres. This is 
// --- code duplication so it´s better to refactor our code creating a reusable data fetching hook, as we did in the 
// --- example of the of section 7 Lesson 16- Creating a generic HTTP Service.

// 1.- To do this we will create a new file under 'hooks' called 'useData.ts' (this one)

// 2.- Now go to the 'useGenres' file to select all the code, copy it and paste it here

//  >-(2)-> select all the code from 'useGenres', copy it and paste it here.

// 3.- Now everyplace where we find a reference to 'genre', we´ll either remove it or make it generic. So first
// --- >-(3.a)-> we won´t need the 'Genre' interface, so comment it. NOTE.- The interface 'FetchGenresResponse'
// --- we´ll leave it cause can be modified later

// 4.- Rename the 'useGenres' function to 'useData' and 'genres' to 'data' and 'setGenres' to 'setData'

// 5.- Create a generic type parameter in the useData, so we can define in other place the type of 'Data' 
// --- now called 'Genre' or 'Game'

// 6.- Rename 'FetchGenresResponse' to the more generic name of "FetchResponse", and instead of 'Genre[]'
// --- we would like to use objects of type "T[]" inserting also the "T" // >-(6.a)->as a generic type parameter
// --- to the definition of the interface "FetchResponse" and wherever referenced this now-generric interface

// 7.- To get rid of the '/genres' hardcoded endpoint, we insert the 'endpoint: string' parameter to the 'useData'
// --- function definition, to receive this parameter from it´s calling parent, and >-(7.a)-> use it instead of the 
// --- hardcoded endpoint

// 8.- Instead of returning 'genres' to the calling component, we must return 'data'

// 9.- Now we tested in our 'GenreList' component, so go there >-(9)-> 

import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// >-(3.a)-> We don´t need it
// interface Genre {
//     id: number,
//     name: string
// }

// >-(6)-> 'FetchGenresResponse' to "FetchResponse", / >-(6.a)->as a generic type parameter to this interface
interface FetchResponse<T> {
    count: number,
    results: T[]
}

// >-(4)-> Update 'Genres' by 'Data',/    >-(5)-> Use the "T" variable type parameter
// >-(7)-> insert the 'endpoint: string' parameter to the 'useData' function 
const useData = <T>(endpoint: string) => {
    // >-(5)-> Use the "T" variable type parameter
    const [data, setData] = useState<T[]>([]);   
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);   
    
    useEffect(() => {    
        const controller = new AbortController();   
        
        setLoading(true);   
        apiClient    
        // >-(5)-> Use the "T" variable type parameter, / >-(7.a)-> use 'endpoint' parameter instead of the 
        // --- hardcoded endpoint
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal })   
          .then((res) => {
            setData(res.data.results);
            setLoading(false);   
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;   
          setError(err.message)
          setLoading(false);   
          });
  
          return () => controller.abort();  
      }, []);     
    // >-(8)-> Return 'data' instead of 'genres'
      return { data, error, isLoading };   
  }

export default useData;