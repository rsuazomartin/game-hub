// Section 8- Building a Video Game Discovery App

// Lesson 31- Searching Games

// >-(8)->.- We came here from the App component to repeat in the 'NavBar' component the 'Props'
// --- object where the 'onSearch' function it´s passed from the 'SearchInput' to the 'App' component
// --- cause we need to use it here. (8.a).- Now we need to pass the 'onSearch' function when rendering
// --- ... the <SearchInput /> component >-(8.a)->

// 9- Now we have an error in the 'App' component "La propiedad 'onSearch falta en el tipo {}', pero es obligatoria
// --- en el tipo 'Props'", so go there and insert the "onSearch={onSearch}" in the render of the <NavBar /> component

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// >-(8)-> Copy here the Props from the 'SearchInput' component; So, it can be received from the 'App' component, and
// --- now we can use the same 'onSearch' function here
interface Props {
  onSearch: (searchText: string) => void;
}

// >-(8)-> Copy here the Props 'onSearch' in the parameters function here, so it can be included in the 'NavBar' function
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* >-(8.a)-> Here we pass the 'onSearch' function to the <SearchInput /> component */}
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
