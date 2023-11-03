// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// We came here from 'GameGrid' component after testing the step >-(1.a- solution)->. In this case we forgot
// --- to specify 'key={platform.id}' to the <Icon> chakra component. After this chaneg we have no errors on
// --- chrome-dev-tools, and in the console we can see the Genre we select. Good and Beautiful

// Now, we have to share our selected Genre with our 'GameGrid' component, so >-(2)-> go there and
// --- start the necessary changes.

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
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
    <HStack marginY={1}>
      {platforms.map((platform) => (
        //  >-(1.a- solution)-> specify 'key={platform.id}'
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
