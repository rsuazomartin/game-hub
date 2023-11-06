// Section 8- Building a Video Game Discovery App

// Lesson 24- Filtering Games by Platform

// >-(7)->.- We came here from the 'GameGrid' component to add 'selectedPlatform' as a 2nd parameter which
// --- can be a 'Platform' object or null -> 'selectedPlatform: Platform | null' >-(7)->, and
// --- ... >-(7.a)-> we should pass it to the RAwGAPI. To do this we need to add a 3rd parameter to the useGames
// --- ... call as 'Platforms:' (which is a property of he config object) and assign it the 'selectedPlatform?.id'
// --- ... (which is optional), and then >-(7.b)-> also need to add it as a received parameter when this
// --- ... component (function useGames) is called, so we add it as 'selectedPlatform:' of type "Platform | null".
// --- ... We should also add this to our dependencies array, so when it changes it refreshes the data >-(7.c)-> 

// TESTING DE APP.- Good, our GameGrid is showing games for our selected platform. But is not clear 
// --- which platform is selected, so we should render the button selector label dinamically to show the
// --- selected plaforrm. To to this we should go to the App component to pass the 'selectedPlatform' to 
// --- our 'PlatformSelector' component, so it can use it as the label of the button. So go there >-(8)->

import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {    
  id: number,
  name: string,
  slug: string,
}

export interface Game {   
    id: string;
    name: string;
    background_image: string,
    parent_platforms:  { platform: Platform }[],
    metacritic: number
}

// >-(7.b)-> add 'selectedPlatform:' of type Platform | null
// >-(7.a)-> assign 'selectedPlatform?.id:' to the call of the function 'useData' as a 2nd parameter 
// --- ... of the 'AxiosRequestConfig' object
// >-(7.c)-> Add 'selectedPlatform?.id' to our dependencies array
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
  useData<Game>('/games', 
  { params: { 
    genres: selectedGenre?.id, 
    platforms: selectedPlatform?.id}}, 
    [selectedGenre?.id, 
      selectedPlatform?.id]);

export default useGames;    
