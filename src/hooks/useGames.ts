// Section 8- Building a Video Game Discovery App

// Lesson 31- Searching Games

// >-(10)->.- Finally We came here from our 'App' component. Now we should receive this info from the 'SearchInput' 
// --- component and have to be passed to our 'useData' hook to send it to the server. First we need to 
// --- add the 'search:' property to the 'params' object and assign it with 'gameQuery.searchText'

// TESTING OUR CHANGES.- We tested combining differente choices by genre, sort options, platform and search text 
// --- and have looked at the chorme-dev-tools under the App and out query config object shows accordingly, 
// --- So... prueba superada

// END OF LESSON.- It´s time to commit our changes under "31: Implement seach"

import { GameQuery } from "../section-1/App";
import useData from "./useData";

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

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', 
  // >-(10)-> Add the 'search: gameQuery.searchText' property to the query parameters to be sent 
  // --- to the server by 'useData'
  { params: { 
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText }}, 
    [gameQuery]);

export default useGames;    
