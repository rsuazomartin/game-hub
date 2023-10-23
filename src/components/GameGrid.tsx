// Section 8- Building a Video Game Discovery App

// Lesson 11- Building Game Cards

// From the 'GameCards' component, we come here to ->(7) render a 'SimpleGrid' component (chakraUI)
// --- instead of the <ul>. And will (7.a) set the 'columns={3}' parameter and 'spacing={10}' pixels
// --- ... so our cards aren´t too close to each other
// --- (7.b).- now we´re going to replace the <li> item to our 'GameCards' component
// --- ... We set the 'key' to 'game.id' and pass the 'game' as a Prop

// 8.- ACTUAL SITUATION.- Looking at our browser, we did ok, but sharp corners, so
// --- Go to the 'GameCards' component ->(8.a) border radius needs to be improved in the 'Card' component

// --- From the 'GameCards' componennt
// ->(8.c) Number of columns should be: mobile devices = 1 column, tablets= 2 columns and 3 or more columns in larger
// --- ... screens. so here in the 'GameGrid' component have to do it.
// --- ... instead of hardcoding the number of columns, we´ll pass an object with hard-valued properties with
// --- ... size of the screens, see: "columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}".
// --- ... As there isn´t padding and cards are next to the screen edge, we´ll add "padding={10}"

// ACTUAL SITUATION.- We can see that the aside area is almost inexistent, so we´ll revisited  number of columns
// --- again in later stages of the project when we implement the aside panel.

// NOW it´s time to commite our progress with name "Building the game cards"

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames(); // <-(5)
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* Render 'SimpleGrid' component (7)-> */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          // (7.b)->
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
