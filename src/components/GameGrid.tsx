// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// The error produced on the test after >-(1.a- solution)-> is due to we have the 'key={skeleton}' modifier
// --- on the <GameCardSkeleton> and not in the <GameCardContainer> in both the <GameCardSkeleton>
// --- and in the <GameCard>, so move it there. Now there´s the same error in the 'PlatformIconList'
// --- ... so go there

// We came here from the 'PlatformIconList' to make the share of state (selected Genre) whith this component.
// --- The question here is how can we share the 'state' between 2 components?
// R= We should lift it up to its closest parent. What is this parent? R= The App component which calls this one
// --- 'GameGrid' and the 'GenreList', so we need to declare a state variable to store and pass the selected
// --- Genre, so go there >-(3)->

// Here we come from the 'GenreList' COMPONENT TO receive THE SELECTED GENRE, SO IT
// --- CAN PASS IT TO THE BACK-END WHILE FETCHING THE GAMES. So let´s go to >-(8)-> to create an
// --- interface of 'Props' with the "selectedGenre: Genre | null", and add >(8.a)-> the 'Props' as parameter
// --- to the 'GameGrid' function, and >-(.b)-> pass it as parameter also to the 'useGames(selectedGenre)' hook
// --- and also included in the 'useGames' function hook as receiving parameter in 'useGames'

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

// >-(8.a)-> Include the props
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
            // * >-(1.a- solution)->
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          // * >-(1.a- solution)->
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
