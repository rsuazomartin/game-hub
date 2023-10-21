// Section 8- Building a Video Game Discovery App

// Lesson 6- Building the Navigation Bar

// 1. In this step will build the basic layout of the navigation bar, not the search nor the
// ... color mode switch, will tackle them later. In this layout we are going to layout our items horizontally, so to
// ... do that we´ll use the component called 'HStack' from ChakraUI
// 2. We will insert an image (logo). We need to import it as a regular module on the top from '../assets/logo.webp'
// 3. Include the image with the 'Image' component of ChakraUI
// 4. Go to the App component and render this 'NavBar' component ->(4)
// ->(5) As the logo is to big, we reduce it with the property 'boxSize='60px'' from Chakra
// 6. Now we can remove the bg color for this grid item (NavBar) in the App component (6)->

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // <-(2)

const NavBar = () => {
  return (
    /* (1)-> */
    <HStack>
      {/* (5)-> Reduce the logo size */
      /* insert the Image component of the logo (3)-> */}
      <Image src={logo} boxSize="60px" />
      {/* Insert a text to probe the horizontal orientation of our NavBar component (6)-> */}
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
