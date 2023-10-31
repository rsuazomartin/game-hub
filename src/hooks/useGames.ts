// Section 8- Building a Video Game Discovery App

// Lesson 15- Loading Skeletons

// SITUATION.- Everything it´s fine. Now to improve the user experience, we are going to show 'loading skeletons'
// --- while our user is waiting for the server to send the data and actually seeng it on the browser.

// 1.- First we need to implement an "isLoading" state and initialize it to 'false' and >-(1.a)-> set it to "true"
// --- just before we call our API, and >-(1.b)-> set it back to "false" once we have received our data from the server
// --- at the end of the .'then' clause, and >-(1.c)-> after the ".catch" if we catch an error instead of data.
// --- Now at the end >-(1.d)-> we need to add "isLoading" to the return clause from our hook

// 2.- To render the "loading skeleton" for our user while is waiting, we must render him the game card skeleton 
// --- instead of the game card, because they are not the same. and this will be done by another different component
// --- we are going to create under the 'components' folder with the name of "GameCardSkeleton.tsx" >-(2)-> 

// >-(14)-> We came here from the 'GenreList' module to use our new 'useData' hook. Here se delete (comment)
// --- the 'FetchGamesResponse' interface 

// 15.- Remove all the code including the braces of the useGames function ( now this is done in the 'useData' hook)
// ... and replace it with useData<Game>('/games'). Now test our application (Has error in line 'x' of 'GameGrid'
// ... component so, >-(16)-> go there)

import useData from "./useData";

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

// >-(14)-> delete the 'FetchGamesResponse', we don´t need it
// interface FetchGamesResponse {    
//   count: number;
//   results: Game[];
//   }

// >-(15)-> replace all the function code with useData<Game>('/games') giving the generic type the <Game> value and passing
// --- the endpoint for '/games'
const useGames = () => useData<Game>('/games')

export default useGames;    
