// Section 8- Building a Video Game Discovery App

// Lesson 37- Customizing the Chakra Theme

// ACTUAL SITUATION.- Everything looks fine, but the RAWG.io website has a deeper shade of gray that isn´t 
// --- the one we have. So there´s a way to do some changes in the colors that we are using. Look at the 
// --- Style System of the Chakra documentation and will see that each color has a number (from 50 to 900) 
// --- assigned according to the shade we want to apply. Mosh has choosen some colors to use, we need 
// --- to specify them into this file. There are some tools to play and choose the colors that we 
// --- want to use there in Chakra website under 'Default Theme' 'Themera', 'Smart Watch', 'Palx', we´ll use 
// --- smart watch. There we can type a color like '#121212'.

// 1.- To specify the colors that we choose for each color option, we add a new property in the object inside 
// --- the 'extendTheme' function called 'colors' which has a property called 'gray' which is also 
// --- an object with one property for each color option. There we map them with the chosen colors.

// TESTING OUR APP... Good!

// END OF LESSON.- Commit our code with name "37: Customize theme to get darker grays"

import { extendTheme, ThemeConfig  } from "@chakra-ui/react";   

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

// >-(1)-> add colors property object with gray property object with one option for each shade of gray
const theme = extendTheme({ 
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: "#ededed",
            200: "#d3d3d3",
            300: "#b3b3b3",
            400: "#a0a0a0",
            500: "#898989",
            600: "#6c6c6c",
            700: "#202020",
            800: "#121212",
            900: "#111",
        }
    }
}); 

export default theme;