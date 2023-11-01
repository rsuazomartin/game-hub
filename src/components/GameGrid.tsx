// Section 8- Building a Video Game Discovery App

// Lesson 19- Displaying the Genres

// 6.- We came here because there´s too much space between cards so, to reduce this space >-(6)-> to change
// --- it from {10} to {3}

// END OF LESSON.- We tested our changes in all browser sizes and everything it´s good, so let´s commit our
// --- changes with the name "Displaying the genres"

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
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="5px"
        //  >-(6)-> change the 'spacing' from {10} to {3}
        spacing={3}
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
