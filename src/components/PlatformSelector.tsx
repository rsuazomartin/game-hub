// Section 8- Building a Video Game Discovery App

// Lesson 23- Building Platform Selector

// TO ADD the platform selector, We will first only render a list of choices, so we created a new
// --- component (this one) called "PlatformSelector.tsx" in the 'components' folder.

// 1.- First we´re going to render a <Menu> chakra component. Inside this menu we´ll create a <MenuList>
// --- which will contain various <MenuItems> (With hardcoded content for the moment, just to test how
// --- will look).

// 2.- Second, we go to the App component to render the <PlatformSelector> component

// >-(7)->.- We return here from the 'usePlatforms' component to use our new hook to get the data for
// --- platforms to be render >-(7)->

// 8.- And finally, se should render the platform names in the <ListItem> dinamically

// TEST.- Everything works as expected, beautifull.

// 9.- What if an error happens? Let´s grab the error from our 'usePlatforms' hook, and in case of error
// --- return null >-(9)->.

// TEST the new error handling scheme... Fine !

// END OF LESSON.- Now it´s time to commit our code to "Build platform selector"

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  //  >-(7)-> use our new hook to get the data
  //  >-(9)-> Get the error from our 'usePlatform' hook
  const { data, error } = usePlatforms();

  //  >-(9)-> return null in case of error
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
