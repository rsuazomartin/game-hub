// Section 8- Building a Video Game Discovery App

// Lesson 16- Refactor- Removing Duplicated Styles

// 7.- We came here from the 'GameCardContainer' component to >-(7)-> first wrap the <GameCardSkeleton />
// --- into the <GameCardContainer>, and then >-(7.a)-> do the same with the <GameCard> component

// 8. Test the results. FINE, so commit our code with name "Refactor: remove duplicated styles"

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            // <-(7)-< Insert the <GameCardSkeleton> inside a <GameCardContainer>
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          // <-(7.a)-< Insert the <GameCard> inside the GameCardContainer
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
