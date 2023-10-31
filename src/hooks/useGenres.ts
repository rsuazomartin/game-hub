// Section 8- Building a Video Game Discovery App

// Lesson 18- Creting a Generic Data Fetching Hook

// >-(11).-> Now the problem here is that this component should deal with providing the 'endpoint' to the HTTP request, 
// --- assigning "/genres" to it, and should release the 'GenreList' component from this responsibility, so
// --- first >-(11)-> We don´t need the 'FetchGenresResponse' interface anymore, so comment it

// 12.- We don´t need the body of the function 'useGenres' because we now do all this in the 
// --- 'useData' generic hook, so remove it, as all the import without use

// 13.- Now go to the 'GenreList' component and do more changes

import useData from "./useData";

export interface Genre {
    id: number,
    name: string
}

// 12.- Remove the body of the function 'useGenres' and call the useData<Genre>("/genres") with 
// --- the 'Genre' type and "/genres" as the 'endpoint' parameter
const useGenres = () => useData<Genre>("/genres");
export default useGenres;