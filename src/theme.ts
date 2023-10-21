// Section 8- Building a Video Game Discovery App

// Lesson 6- Building the Navigation Bar

// First we create a new file called 'theme.ts' under the 'src' folder where we are going 
// ... to manage the theme of our website

// 1. We need to import extendTheme and ThemeConfig from '@chakra-ui/react'
import { extendTheme, ThemeConfig  } from "@chakra-ui/react"; // <-(1)

// 2. We need to create a const config, annotate it with class ThemeConfig and assign it with an object with 
// ... 1 property: initialColorMode: 'dark'
// 3. We call extendTheme and pass an object ('config' with our config property) as parameter and store it
// --- in the const 'theme'
// 4. Esport the new 'theme' from this module.
// 5. Now we go to main to import 'theme'

const config: ThemeConfig = { // <-(2)
    initialColorMode: 'dark'
}

const theme = extendTheme({ config }); // <-(3)

export default theme;