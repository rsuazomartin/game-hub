// Section 8- Building a Video Game Discovery App

// Lesson 36- Shipping Static Data (within our App and deployed with it)

// CURRENT STATUS.- In the current implementation, we show a spinner while getting the genres from the server
// --- Normally genre list are very rarely updated, so we can assume that it´s an static list. So, we can 
// --- copy it from the games server to our App and delivery with it at deployment.

// 1.- To do this, we´ll first create a new module called 'genres.ts' under a new folder called 'data', so 
// --- go there

// >-(2)->.- We return here cause we no longer need to ask for a genre fetch to the 'useData' hook, instead
// we´ll return a new object with three properties: data, isLoading and error >-(2)->. This object return
// --- is needed to minimize the impacto of this change in the rest of the implementation, cause this object
// --- with these 3 properties is what the 'GenreList' module is waiting from this module (useGenres)

// import useData from "./useData"; (this is no longer needed)

import Genres from "../data/genres";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

//  >-(2)-> return a new objet with 3 properties: data, isLoading and error 
const useGenres = () => ({ data: Genres, isLoading: false, error: null });

export default useGenres;