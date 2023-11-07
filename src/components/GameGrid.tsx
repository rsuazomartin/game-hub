// Section 8- Building a Video Game Discovery App

// Lesson 25- Refactoring- Extracting a Query Object

// >-(4)->.- We came here from the App compmonent to apply the same techniche we use in our 'App',
// --- To replace the references to the old state variables >-(4)->

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../section-1/App";

// >-(4)-> replace the 2 properties by 'gameQuery: GameQuery' (to use GameQuery we need to export it in App)
interface Props {
  gameQuery: GameQuery;
}

// >-(4)-> replace the references of the 2 properties by 'gameQuery' but need to modify the useGames hook
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="5px"
        spacing={3}
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
