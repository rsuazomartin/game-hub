// Section 8- Building a Video Game Discovery App

// Lesson 23- Building Platform Selector

// >-(3)-> We came here from the App component. We should render the platform items <ListItems> dinamically. 
// --- To do this we´ll use a diferent endpoint on RAWG api, si we look in the site documentation under 
// --- 'Plarforms' and see that there´s an endpoint for parent platforms called "/platforms/lists/parents". 
// --- So we´ll create a new hook (this one) called 'usePlatform' under the 'hooks' folder, to fetch the 
// --- platforms from this endpoint. 

// 4.- First we need to define an interface called Platform which is an object with 3 properties: id: number, 
// --- name: string, and slug: string, which represents the shape of the data to get from the endpoint

// 5.- Here we create our new hook called "usePlatform" and call the 'useData' hook with our generic type of 
// --- <Platform> and passing the new endpoint for platforms as parameter and our hook it´s ready

// 6.- We need now to export it

// 7.- Now we should go to the 'PlatformSelector' component to use our new hook to get the data for 
// --- platforms to be render >-(7)->

import useData from "./useData"

// >-(4)-> define the Platform shape to be used to give a value to the generic type parameter
interface Platform {
    id: number,
    name: string,
    slug: string
}

// >-(5)-> Crete the 'usePlatform' hook to call the 'useData' hook to fetch the <Platform> type of data,
// --- passing it the platform endpoint
const usePlatform = () => useData<Platform>("/platforms/lists/parents")

// >-(6)-> export our hook
export default usePlatform;