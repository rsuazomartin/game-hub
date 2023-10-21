// Section 8- Building a Video Game Discovery App

// Lesson 8- Building the Color Mode Switch

import { extendTheme, ThemeConfig  } from "@chakra-ui/react";   

const config: ThemeConfig = { // <-(2)
    initialColorMode: 'dark'
}

const theme = extendTheme({ config }); // <-(3)

export default theme;