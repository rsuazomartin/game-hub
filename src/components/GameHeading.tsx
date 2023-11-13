// Section 8- Building a Video Game Discovery App

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../section-1/App";

// Lesson 32- Adding Dynamic Heading

// ACTUAL SITUATION.- We would like to add a heading to our screen on games, so whenever we choose some
// --- genres and platforms, this selections form part of the heading. For this purpose we first created a nenw
// --- component called 'GameHeading.tsx' (this one) under the components folder.

// 1.- Here we´ll return a <Heading> chakra component (could be an <h1>, but we are using chakra).

// 2.- To render this heading dynamically, se need to receive the 'gameQuery' object as 'Props', so let´s define
// --- a Props with the property 'gameQuery: GameQuery' and (2.a).- add it to our funtion received parameters

// >-(2)-> define a Props with the property 'gameQuery: GameQuery'

// 3.- The logic we want to implement is that originally we render 'Games', if the user select only a genre then we´ll
// --- render 'genre games' if the user select only the platform, then 'platform games' and if the user selects
// --- the platform and the genre, we´ll render 'platform genre games'. This is very simple... look...

// 4.- No go to the 'App' component to render our <GameHeading> component >-(4)->

interface Props {
  gameQuery: GameQuery;
}

// >-(2)-> add 'gameQuery' to our parameter´s function
const GameHeading = ({ gameQuery }: Props) => {
  /* >-(3)-> contruct the desider arrangement using literal syntax and store it in 'heading' */
  const heading = `${gameQuery.platform?.name || ""} 
    ${gameQuery.genre?.name || ""} gameses`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {/* >-(3)-> render the dynamic 'heading' */}
      {heading}
    </Heading>
  );
};

export default GameHeading;
