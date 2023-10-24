// Section 8- Building a Video Game Discovery App

// Lesson 12- Displaying Platform Icons

// From the 'useGames' hook ->(2).- Here in the 'GameCards' component we´re going to implement this feature icons,
// --- step by step. ->(2.a) First just the platform names, after the heading, we bring
// --- ... {game.parent_platform.map(({platform}) => <Text>{platform.name})} NOTA.- Here we needed to destructure
// --- ... 'platform' (previously annotated it with the type 'Platform') to avoid the ugly 'platform.platformr.name'
// --- ... while rendering the 'platform.name'

// 3.- This step is form rendering the icons, so first we need to install the 'npm i reac-icons@4.7.1' at the terminal

// 4.- Reaching or looking for each icon based on the icon-name is not the main purpose of this module, so it´s better
// --- if we create another module called 'RenderIcons' and move all this logic there ->(4) so, crete a file
// --- in the components folder and go there ->(4)

// ->(7) From the 'PlatfformIconList' component come here to ->(7) render the <PlatformIconList> instead of the previous
// --- list, set the 'plaforms' property of 'Props' to... and here we have to deal with an ugly mapping...
// --- ... we need to grab our 'game.parent_platforms' array of objects and throu the 'map' method, and
// --- pass each 'platform' (p) => to construct an array of platform objects and render 'p.platform'

// 8.- No we have to replace the names of the platforms with the icon of each platform. so, ->(8) go to the
// --- ... 'PlatformIconList' component

import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
