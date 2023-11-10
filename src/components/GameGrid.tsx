// Section 8- Building a Video Game Discovery App

// Lesson 34- Cleaning Up the Game Cards

// >-(2)->.- We came here from the 'GameCards' component to give more space between cards,
// --- so change the 'spacing={3}' for 'spacing={6}'

// 3.- Reduce the game grid columns for xlarge screens to 4 instead of 5

// END OF LESSON.- All it´s looking so good so commit our changes "33: Clean up the game gards"

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../section-1/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        // >-(3)-> Set the columns "xl: 4"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="5px"
        // >-(2)-> Set the spacing={6}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
