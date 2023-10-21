// Section 8- Building a Video Game Discovery App

// Lesson 8- Building the Color Mode Switch

// ->(7) We insert our '<ColorModeSwitch>' component instead of the test-text, but does not
// ... looks so good, so
// ... ->(8) we will remove the bg of our aside and main components in the 'App' component ->(8)
// ->(10) The last thing to do here is push the switch to the right side in the NavBar component ->(10)
// ... This is done with "justifyContent='space-between'" in <HStack> component and some padding='10px'

// NOW is time to review our code and commit to our git repository

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; // <-(2)
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    // ->(10) justifyContent='space-between' in <HStack>
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* (7)-> Insert the render of our color mode switch */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
