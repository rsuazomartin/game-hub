// Section 8- Building a Video Game Discovery App

// Lesson 14- Getting Optimized Images

// From the "image-url" component >-(7)->.- Insert the call to the service "getCroppedImageURL" where
// --- we´re rendering our game image, and pass it the original image as an argument. Save our component
// --- and test it

// LESSON END.- As a side gain from this step, we find that now all images are the same size and uniform
// --- in all game cards, not as before where there were ones larger than others.
// SO, save the changes and commit to git with name "Get Optimized Images"

import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* -(4.a)->  */}
        <HStack justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* -(4)-> */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
