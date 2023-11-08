// Section 8- Building a Video Game Discovery App

// Lesson 30- Building Search Input

// >-(4)-> We came here from the NavBar component cause have splited the Color Mode label in 2 lines.
// --- so, Add whitSpace='nowrap' to the <Text> statement in the 'ColorModeSwitch' component >-(4)->

// TESTING IT... Right!

// 5.- Now that we have 3 components in the NavBar, we don´t really need the "justifyContent='space-between'"
// --- in <HStack> component so get rid of it to make our code a little bit cleaner

// 6.- Now, let´s go to the 'SearchInput' component to add an search icon inside the search input field.
// --- To do this we create an <InputGroup> component wrapping our <Input> components inside >-(6)->

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // >-(5)-> remove 'justifyContent'
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* >-(4)-> Adding 'whiteSpace="nowrap"' to the <Text> component */}
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
