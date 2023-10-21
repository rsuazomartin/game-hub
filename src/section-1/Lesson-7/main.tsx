// Section 8- Building a Video Game Discovery App

// Lesson 6- Building the Navigation Bar

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./section-1/App";
import theme from "./theme"; // <-(5) import them from './theme'
import "./section-1/index.css";

// 6. Now we need to specify the color mode in the 'ChakraProvider' component, and 7. before the <App /> component
// 8. Now we can see the color mode in chrome-dev-tools under application/-> Local Storage/ -> http: ...
// ... see the key: 'chakra-ui-color-mode' which value is 'light', if you delete this see what happens in our desktop
// ... (refresh the page) and we are now in the 'dark' color mode. You can switch between 'dark' and 'light' changing
// ... the value manually

// Now it´s time to commit to our git repository under the name "Implementing the dark mode"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* (7)-> */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
