// Section 8- Building a Video Game Discovery App

// Lesson 24- Filtering Games by Platform

//  >-(5)-> We came here from the App component to add the 'selectedPlatform: Platform | null'
// --- to our interface 'Props' >-(5)->

// 6.- Now we have to pass it to our 'useGames' hook so we can add a 2nd argument to its call >-(6)->

// 7.- We need to add 'selectedPlatform' in the 'useGames' hook to pass it to the 'useData' form fetching
// --- only the selected platforms, so go to the 'useGames'

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  // >-(5)-> add selectedPlatform so can be shared with its parent component
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  // >-(6)-> insert the 'selectedPlatform' as 2nd argument (gives an error cause we need to add it in 'useGames')
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
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
