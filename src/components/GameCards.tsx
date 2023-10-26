// Section 8- Building a Video Game Discovery App

// Lesson 16- Refactor- Removing Duplicated Styles

// Everything is fine (with the exception of the <SkeletonText> component), but we have duplication of styles
// ... in the 'GameCards' component. So it´s better if we create another component named 'GameCardContnainer.tsx'
// ... to be the container for our cards, and then apply all the styles for that container.

// 1.- Add a new component called 'GameCardContainer.tsx' >-(1)-> and go to it

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
    // <-(4)-< remove the styles arguments from the <Card> component
    <Card>
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
