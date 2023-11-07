// Section 8- Project: Building a Video Game Discovery App

// Lesson 26- Building a Sort Selector

// ACTUAL SITUATION.- Now we´re going to add a Sort selector dropdown list with some options for sorting
// --- the games in order: relevance, Date, Name, popularity, etc. In this lesson we´ll only create the dropdown
// --- list (SortSelector.tsx) in the components folder, and let the sorting logic for another

// 1.- To start we´ll add a new file (this one) called 'SortSelector.tsx', and as this selector is very similar to
// --- the platform selector, let´s copy all return code from it to here. To solve the compiler errors import
// --- the lacking components

// 2.- Change The menu label to something static (Order by: Relevance) for now (KISS principle) and also the
// --- <MenuItem>s with 6 'MenuItem*6' also with hardcoded values

// 3.- The we need to render the new 'SortSelector' in the App component >-(3)->

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {selectedPlatform?.name || "Platforms"}  >-(2)-> */}
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
