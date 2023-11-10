// Section 8- Building a Video Game Discovery App

// Lesson 34- Cleaning Up the Game Cards

// ACTUAL SITUATION.- We need to clean up the 'GameCard' component to polish up some minor issues

// 1.- Move the platform icons and the game score above the game name. So move it above it and give it
// --- a marginBottom of {3}

// 2.- We should give more space between cards, so go to the GameGrid component an change the 'spacing={3}'
// --- >-(2)-> go to the 'GameGrid' component

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
    <Card>
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
