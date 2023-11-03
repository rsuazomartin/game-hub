// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// >-(8.b)-> We came here from the 'GameGrid' component to include the "selecedGenre: Genre | null" as receiving
// --- parameters to pass it to the 'useData' hook to fetch the games of the 'selectedGenre'

// 9.- Now we have to pass this parameters to the 'useData' hook, but currently this hook only receives 
// --- the 'endpoint' (/games) as parameter, but we can make this more flexible  by giving it an 
// --- 'AxiosRequestConfigObject', to do this we go to the 

// >-(11)-> We came here from the 'useData' hook to include a 2nd parameter in the call. This will be the
// --- an object with a property called 'params' which is a property of the 'AxiosRequestConfig' object, we set 
// --- this property as an object and in this object we set the property 'genres' (See the rawg.io documentation)
// --- to 'selectedGenres.id' (React automatically add '?' cause this is an optional parameter that can be null).

// 12.- Now se send this parameter to the 'useData' hook and go there to continue >-(12)->

// >-(15)->.- We came here from the 'useData' hook to send our dependencies to the 'useData' hook. So, add our 3rd 
// --- parameter '[selectedGenre?.id]' when calling the 'useData' hook >-(15)->

// 16.- Now our last step. Go to the App component and >-(16)-> pass the 'selectedGenre' o our 'GameGrid' component 

import useData from "./useData";
import { Genre } from "./useGenres";

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

// >-(15)-> Add our dependencies as a 3rd parameter [selectedGenre?.id]
const useGames = (selectedGenre: Genre | null ) => useData<Game>('/games', { params: { genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;    
