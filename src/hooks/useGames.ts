// Section 8- Building a Video Game Discovery App

// Section 27- Sorting Games

// >-(5)->.- We came here from the 'GameGrid' component to update it with the 'sortOrder' (ordering: ) 
// --- parameter which has to be passed to our RAWG API as a new query parameter 
// --- (in the params: object) >-(5)->

// TESTING OUR APP.- Fine! the GameGrid shows the selected games in sort order and platform and genre we like.
// ... but we need to change the label to show the current sort order. Se we need to >-(6)-> go to the App component
// ... to pass the current sort order to the 'SortSelector' component >-(6)->

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
  // >-(5)-> Add the 'ordering: gameQuery.sortOrder' property to the query parameters to be sent to the server
  { params: { 
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder }}, 
    [gameQuery]);

export default useGames;    
