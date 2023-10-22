// Section 8- Building a Video Game Discovery App

// Lesson 10- Creating a Custom Hook for Fetching Games

// SITUATION.-
// This 'GameGrid' component is still involved in making HTTP requests, but its main purpose is to
// --- generate and provide markup to render the games.
// 1.- So, it´s better to create a custom hook to do the http requests to fetching games, provide
// --- the endpoint, manage error situations and other functions not supposed to be here. This will
// --- help us make our code more modular and reusable and accord to separation of concerns. Then, create a
// --- new 'folder' under 'src' called 'hooks' and create inside a new file called (1)-> 'useGames.ts'

// ->(4) Go to the 'useGames' hook and ->(4).- We need to return our 'games' and 'error' useState variables, so we´ll create
// --- a return an object with two properties '{ games, error }' right after the end of the 'useEffect' hook,
// --- to solve the related compilation errors in this module

// ->(5). Here in the 'GameGrid' we are going to create a const destructured in an object '{ games, error }'
// --- to receive this properties from the 'useGames' hook, and (5.a) Ctrl+. to import (Ctlr+.) the 'useGames'
// --- hook from "../hooks/useGames"

// ->(6) Go to the 'useGames' hook and create a 'const controller' funtion as 'new AbortController()' to
// --- manage clean-up

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames(); // <-(5)
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
