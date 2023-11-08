// Section 8.- Project: Building a Video Game Discovery App

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

// Lesson 30- Building Search Input

// ACTUAL SITUATION.- We now need to add the search input field to search games by name.

// 1.- Create a new file called 'SearchInput.tsx' (this one) under the 'components' folder

// 2.- Here we will return an <Input> component

// 3.- Add this 'SearchInput' component to our 'NavBar' component >-(3)->

// >-(6)->.- We came here from the NAvBar 'component' to add an search icon inside the search input field.
// --- To do this we create an <InputGroup> component wrapping our <Input> components inside >-(6)->

// TESTING OUR APP... Nice! The icon it´s shown. Now see if this changes also look good on mobil devices... Good!

// END OF LESSON.- Let´s commit our code as ""

const SearchInput = () => {
  return (
    // >-(6)-> Create an 'InputGroup' and inside insert an <InputLeftElement> with a childrem set to {BsSearch}
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
