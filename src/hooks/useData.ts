// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// We came here from the 'useGames' component to continue allowing the passing of more generic parameters
// --- to do the Fetch of the games giving their selectedGenre. 
// 9.- Now we have to receive this parameters from the 'useGames' hook, but currently this hook only receives 
// --- the 'endpoint' (/games) as parameter, but we can make this more flexible  by giving it an 
// --- 'AxiosRequestConfigObject', first we go to the .get method of the 'useEffect' hook, which is where
// ... we send the request to the server. Look at the object that we pass as a 2nd argument 
// --- "({ signal: controller.signal })" THIS IS WHAT WE CALL AN AXIOS REQUEST CONFIG OBJECT. In this
// --- object we can pass data in the request body and we can also pass Query strign parameters and so on.
// --- So, we can give this hook a 2nd parameter called 'requestConfig:' of type 'AxiosRequestConfig' and
// --- we want to make it optional because not always will be passed, so '?'.

// 10.- To filter the games by Genre, we need to pass the Genre as a Query string parameter also, so >-(11)-> go to 
// --- the 'useGames' hook and add a second parameter as an object with a property called 'params' which is 
// --- a property of the 'AxiosRequestConfig' object.

// >-(12)->.- We came here from the 'useGames' hook to receive the parameter object of type 
// --- 'AxiosRequestConfig' with the property 'genres' with the optional selected 'selectedGenre.id' >-(12)->
// --- so we add this 2nd parameter to the '.get' method of the 'useEffect' hook, affter "signal: ..."

// First we need to spread the '...requestConfig' object to add any additional properties here and see
// --- and test our application here in the browser... Nothing is happening when we click on a Genre, so looking
// --- into the network tab we can see that no additional fetch requests have been sent to the server. This
// --- happens because we have set the 'dependencies' array of the '.get' method to an empty array [],
// --- and this means that this fetch should be send only once, the first time our component is rendered. 

// solution.- To solve this issue, >-(13)-> we have to pass an array of dependencies here, se when the 'selectedGenre' 
// --- changes, we send another request to the server to get the games that match the selected genre. So, we
// --- need to pass a 3rd parameter for our dependencies called 'deps': which is an optional array of 
// --- type 'any[]'

// 14.- Next we have to add the [...deps] as the dependencies at the end of the 'useEffect' hook. This results
// --- in an error saying that an array of type any or undefined must have an iterator. This is because we declared
// --- this 'deps' array as optional (?), so if results undefined can not be spread, so we need to test
// --- first if 'deps' is thruthy (?) then do spread it, else pass an empty array. The error is gone

// 15.- Now that our 'useData' hook receives our dependencies, we should go to 'useGames' to specify them
// --- to continue our changes there >-(15)->

import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number,
    results: T[]
}

// >-(9)-> Pass a 2nd parameter of type 'AxiosRequestConfig' which is an Axios standard object, / >-(13)->
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);   
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);   
    
    useEffect(() => {    
        const controller = new AbortController();   
        
        setLoading(true);   
        apiClient    
        // >-(12)-> Add the 2nd paramter object (spread all the original properties of this object)
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })   
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
          {/* >-(14)-> Adding the [...deps] array of dependencies */}
      }, deps ? [...deps] : []);     
      return { data, error, isLoading };   
  }

export default useData;