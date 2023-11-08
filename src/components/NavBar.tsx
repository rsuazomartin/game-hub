// Section 8- Building a Video Game Discovery App

// Lesson 30- Building Search Input

// >-(3)->.- We came here from the new 'SearchInput' component to add it to this 'NavBar'
// --- component >-(3)-> right after the <Image> component

// TESTING.- Good! But we have splited the Color Mode label in 2 lines. Add whitSpace='nowrap' to the <Text>
// --- statement in the 'ColorModeSwitch' component >-(4)->

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
