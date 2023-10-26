// Section 8- Building a Video Game Discovery App

// Lesson 15- Loading Skeletons

// 4.- Now here in our 'GameGrid' component we´re going to render the 'GameCardSkeleton' component >-(4)->, but
// --- only when "isLoading === true". So first, >-(4.a)-> let´s add "isLoading" to our call to the 'useGames' hook

// 5.- To render the skeletons we need to define an array of let´s say 6 skeletons, because when loading, we have
// --- to >-(5.a)-> match each game card with its skeleton component below, and set the 'key={skeleton}'

// IMPORTANT NOTE.- Lesson done, but <skeletonText> does not function the background skeleton shows, but the
// --- skeleton text doesn´t. Let´s commit our changes with name "Show loading skeletons"

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames(); // <-(4.a)-< Add 'isLoading' >
  const skeletons = [1, 2, 3, 4, 5, 6]; // <-(5)-< initialize 'skeletons' array>
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {/* <-(5.a)-< render skeletons if isLoading is true> */}
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
