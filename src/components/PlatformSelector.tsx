// Section 8- Building a Video Game Discovery App

// Lesson 24- Filtering Games by Platform

// >-(2)->.- We came here from the App component to notify the App component when the user selects a Platform
// --- it should be notified. So, we define an object 'Props' with a property which is a function called
// --- 'onSelectPlatform' and when the user selects a platform takes a parameter called 'platform' of
// --- type Platform and returns void. >-(2)->
// --- ... >-(2.a)-> Also add it as parameters received in the 'PlatformSelector' function hook

// 3.- We need to handle the click event, so add the onClick={ to a call-back function and pass it
// --- to onSelectPlatform() with the parameter platform} >-(3)->

// 4.- Now we need to go to the App component to add the 'onSelectPlatform' function as parameter in
// --- our <PlatformSelector> component

// >-(9)-> We came here from the App component to add the property 'selectedPlatform' (as a Platform
// --- object or null)to our Props, so we can pass it here from the App component. We also should add
// --- it to the parameter Props to our 'PlatformSelector' function. And finally we need to
// --- ... condition the label 'Platforms' when no 'selectedPlatform?.name' in the <MenuButton>
// --- ... chakra component >-(10)->

// TESTING THE APP.- Fine, we can see in the query parameters of the 'Payload' tab of the network tab of
// --- chrome dev tools, that we are passing 2 parameters: 'genres' and 'platforms'

// END OF LESSON.- It´s time to commit our changes to git given name "filter games by platform"

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

//  >-(2)-> create a Props with a function to pass the platform of type Platform to be used by the App component
// >-(9)-> add the property selectedPlatform to our Props which , so we can pass it here from the App component
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

// >-(2.a)-> include onSelectPlatform as Props
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* >-(10)-> render selectedPlatform?.name or 'Platforms' */}
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {/*  >-(3)-> add the onClick event to the <Menu> component */}
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
