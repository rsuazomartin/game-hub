// Section 8- Building a Video Game Discovery App

// Lesson 35- Adding Emojis

// ACTUAL SITUATION.- We want to add some fun to our game cards addin emojis based on the 'rating_top'
// --- property of our 'Game' interface (which lays in the object from the API that comes from the server)

// 1.- First grab the 3 emojis that comes in the emojis folder of the resources compressed file that comes
// --- with this lesson and paste them into the assets folder

// 2.- Add the property 'rating_top: number' to the 'Game' interface

// 3.- We create a new component called 'Emoji.tsx' and go there

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
    metacritic: number,
    rating_top: number,
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
