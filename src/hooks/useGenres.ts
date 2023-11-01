// Section 8- Building a Video Game Discovery App

// Lesson 20- Showing a Spinner

// 2.- Simulate an error fetching the genres adding some character to the /'genres' endpoint

import useData from "./useData";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

//  >-(2)-> Simulate an error adding x to genres
const useGenres = () => useData<Genre>("/genres");
export default useGenres;