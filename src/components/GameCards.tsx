// Section 8- Building a Video Game Discovery App

// Lesson 35- Adding Emojis

// >-(7)->.- We came here from the 'Emoji.tsx' component to add here the new 'Emoji' component >-(7)->

// 8.- Now we see that emoji it´s to much close to the game name, give it a marginTop={2}, and the bullsEye
// --- it´s smaller than the other, givit a dynamic size in the EmojiMap adding a new property called 'boxSize:'
// --- that´s the beauty of the use of the EmojiMap, there´s no need to specify all this modifications
// --- below in the code, so go to the 'Emoji' component to do this adjustments

import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from "./Emoji";

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
        <Heading fontSize="2xl">
          {game.name}
          {/* >-(7)-> render the <Emoji> component passing the 'game.rating' (a number) as a parameter */}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
