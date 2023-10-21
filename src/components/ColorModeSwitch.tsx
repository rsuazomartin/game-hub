// Section 8- Building a Video Game Discovery App

// Lesson 8- Building the Color Mode Switch

// This new file will serve us to create the color mode switch

// 1. In this component we will have to use an horizontal stack component because our items will be horizontal
// 2. Inside this HStack we will have a component called 'Switch' also from chakraUI, and right next to it
// 3. a Text component for the label of the switch 'Dark Mode'
// 4. To manage the color modes we have to import a hook designed in chakra called 'useColorMode'
// 5. Importe this new hook, we need to declare a const {toggleColorMode, colorMode} = useColorMode();
// 6. Now we are going to initialize our color mode switch adding
// ... "isChequed={colorMode === 'dark'} onChange={toggleColorMode}" to the properties of our 'Switch' component
// 7. Now let´s add this 'ColorModeSwitch' component to our 'NavBar' component ->(7)
// 9.- we need to change the color scheme of the color mode switch to green ( to better effect )
// ->(10) The last thing to do here is push the switch to the right side in the NavBar component ->(10)

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // (1)->
    <HStack>
      {/* (2)-> */}
      <Switch
        // ->(9) change the colorscheme of the color mode switch component to green
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* (3)-> */}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
