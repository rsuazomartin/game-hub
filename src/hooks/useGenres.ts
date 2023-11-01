// Section 8- Building a Video Game Discovery App

// Lesson 19- Displaying the Genres

// ACTUAL SITUATION. Now we need to add the image to the left of the name of the genre. Looking into 
// --- Chrome-dev-tootls under Network an selecting 'Fetch/XHR', will see all the fetchs we´ve made 
// --- to the server. Click on the 'genres?key' one, and then select the 'Preview' tab, look for the results
// --- we´ll see an image_background; This is what we´re looking for.

// 1.- Here in the 'useGenres' interface >-(1)-> add the property 'image_background: string' to the 'Genre' interface

// 2.- Go to the 'GenreList' >-(2)-> to use the chakra <List> component instead of the <ul>

import useData from "./useData";

//  >-(1)-> add the property 'image_background: string'
export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;