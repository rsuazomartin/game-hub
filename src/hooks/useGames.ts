// Section 8- Building a Video Game Discovery App

// Lesson 25- Refactoring- Extracting a Query Object

// 4.- Now we need to apply the same technick in our 'useGames' hook to replace the old state variables
// --- with the new 'gameQuery' query object >-(4)->

// TESTING OUR CHANGES.- Everything is working but the the playstation 'platform' shows nothing no matter 
// --- which genre we choose--- something to investigate

// END OF LESSON.- Commit our code with name "Refactoring: extract a query object"

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
  // >-(4)-> This is the only place where we´ll need to work with individual values
  { params: { 
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id}}, 
    // >-(4)-> here we pass the dependencies array with only 'gameQuery' so whenever one of his properties
    // --- changes, it will resend our fetch requests
    [gameQuery]);

export default useGames;    
