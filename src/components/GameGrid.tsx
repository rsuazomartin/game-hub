// Section 8- Building a Video Game Discovery App

// Lesson 18- Creaating a Generic Data Hook

// >-(16)-> We came here from the 'useGames' component, when we tested our changes got an error in line '28'
// ... of 'GameGrid' component (found in the chrome-dev-tools) so, >-(16)-> inspecting our code here,
// ... we found that we are still receiving 'games' between the returned parameters from the 'useData'
// ... hook, and this needs to be changed to 'data'... do it wherever it´s found. Testing...
// ... fine. So it´s time to commit our changes to git with name "Create a generic data fetching hook"

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
