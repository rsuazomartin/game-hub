// Section 8- Building a Video Game Discovery App

// Lesson 9- Fetching the Games

// 1.- First we need to go to: //rawg.io/login?forward=developer 
//	a) open an account with the url of our local server
// 	b) Copy the API key that can be obtained

// 2.- Install axios to send http requests to the server (back-end)
//  a) npm i axios
// 3.- Create an axios instance with custom configuration parameters (here will be included the API key):
//  a) create a new file folder called 'services' under the folder 'src'
//  b) Create a new file called 'api-client' under the 'services' folder (this file)
// 4.- Import axios
// 5.- using axios.create, we´ll create an configuration object with the property 'params' where we will store 
// --- the API Key just copied from the 'rawg.io' site. With this in place our axios http requests will
// --- send the API Key in each request to the back-end
// 6.- We also need the base URL of our end-point. So go to the rawg.io and look for 'API Documentation' and under
// --- 'list of games', at the end will get the URL for the list of games. Copy it and paste it as a value
// --- of the parameter 'baseURL' in the axios custom configuration, removing the '/games' part
// 7.- Now we need to export it as the default object from this module

// 8.- Now we need to create a new component called 'GameGrid.tsx' under the 'components' folder ->(8)

import axios from "axios"; // <-(4)

export default axios.create({ // <-(5)
    baseURL: 'https://api.rawg.io/api',     // <-(6)
    params: {
        key: 'fcaf31e2ea0c474e9311e6f1610125dd'     // <-(5)
    }
})