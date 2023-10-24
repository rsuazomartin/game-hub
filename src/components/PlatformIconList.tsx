// Section 8- Building a Video Game Discovery App

// Lesson 12- Displaying Platform Icons

// From the 'GameCards' component ->(4).- we come here to match each icon image with its name, to render it.

// 5.- We should use a Props which will be an array of platform objects, so create an interface to define
// --- the shape of Props with properties: 'platforms:' of type 'Platform' (we need to export ir from the
// --- 'useGames' hook) which i´ll be an array of objects

// 6.- We have to use the platform array wich the shape of Props as parameter to the 'PlatfomIconList'
// --- function, to prepare its data for the render, and ->(6.a) move here the rendering of the platform list
// --- from the 'GameCards' module, but ->(6.b) changing game for platform and remove the destructuring cause
// --- it´s not needed anymore

// 7.- Go to the 'GameCards' component to add the rendering of this new component

// From the 'GameCards' component ->(8).- No we have to replace the names of the platforms with the
// --- icon of each platform. so, we need to import a bunch (FaWindows, FaPlaystation, FaXbox, FaApple,
// --- FaLinux, and FaAndroid) of icons from the 'react-icons' library
// --- and ->(8.a) the lacking icons will be imported from other icon libraries

// 9.- Now we need to map the name of each platform to an icon. Instead of a bunch of if statements
// --- we are going to use an object (iconMap) as a map. We will use the 'Slug' instead of the name means that
// --- instead of 'PlayStation' we will find 'playstation' which is more stable for us.
// --- so we will define the object const 'iconMap' = { pc: FaWindows, playstation: FaPlaystation,
// --- xbox: FaXbox, mac: FaApple, linux: FaLinux, nintendo: SiNintendo, ios: MdPhoneIphone, web: BsGlobe,
// --- and android: FaAndroid}

// 10.- Now we can replace the <Text> component with an <Icon> component from chakraUI. this component has
// --- a Prop called 'as' which we be set to "{}" (an icon component imported from the react library), so we
// --- pass "iconMap[platform.slug]" which will index the iconMap with 'platform.slug' as key to find its value
// --- which will be annotated as type "IconType" (an special type from 'react-icons' library)
// --- --- -(10)-> annotating the type in "iconMap: { [key: string]: IconType }" This is like saying that
// --- ... this object will be indexed by the name of the property to return its value, and "[key: string]"
// --- ... is called an 'index signature'

// LESSON ADVANCE SITUATION.- Everything worked so fine, but the icons are the same color or the heading
// --- creating 'blur', -(10.a)-> so we´ll make it a little darker adding "color='grey.500'" to the <Icon>
// --- component (ChakraUI site, under 'Styled System' / 'Default Theme' you will see all the colors
// --- variants). -(10.b)-> We need to add a little space between the icons and the heading, so we´ll add "marginY={1}"
// --- to our <HStack> component (could also use ="10px" which is fixed, but as 'theme.space' default value in
// --- chakraUI is 4px, telling {1} is like saying give it a 1 multiple of the 'theme.space' which will be
// --- a variable amount of space depending on 'theme.space' default for the theme we´re using)

// DONE WITH THIS LESSON.- So it´s time to commit our code giving it a name of "Displaying platform icons"

// -(8)->
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; // <-(8)- the '/fa' and 'Fa' are short for 'Font Awesome'
import { MdPhoneIphone } from "react-icons/md"; // <-(8.a)-
import { SiNintendo } from "react-icons/si"; // <-(8.a)-
import { BsGlobe } from "react-icons/bs"; // <-(8.a)- 'bs' are short for 'Bootstrap'
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  // <-(5) define the shape of Props
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    //  -(10.b)->  -(10)-> /}
    <HStack marginY={1}>
      {/* (6)-> (6.a)-> (6.b)-> */}
      {/* (2.a)-> brought here from 'GameCards' component by the step 6*/}
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" /> // <-(10.a)-
      ))}
    </HStack>
  );
};

export default PlatformIconList;
