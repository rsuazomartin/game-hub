// Section 8- Building a Video Game Discovery App

// Lesson 9- Fetching the Games

// From the 'api-client' service ->(8).- rafce

// 9.- Now we need to create an state variable to store our game objects initializes to an empty array
// 10.- And also other state variable to store errors
// 11.- Next we need an 'Effect' hook to send and manage our http requests to the back-end
// 12.- import apiClient from '../services/api-client' to use it in th effect hook as part of the call-back function
// 13.- To define the .then property of the effect hook, first we need to:
// ---  a) define an interface to receive the games from the response called 'FetchGamesResponse' with poperties:
// ---  ... count: number and results: (an array of games which type should be defined throu another
// ---  ... interface to define each game):
// --- b) interface 'Game' with properties 'id: string' and 'name: string'
// --- c) Now the 'result' property of 'FetchGamesResponse' will be of type 'Game' (array of type game)
// --- d) With this we can say that the 'res' (results) property of the '.then' clause was going to
// --- ... be stored in the state variable called 'games' throu 'setGames' <-(9), but we also need
// --- e) to tell the type of the generic type argument in the 'apiClient.get' will be
// --- ... 'FetchGamesResponse' (between angle brackets)
// --- f) Now we can tell that the arguments of the 'setGames()' function will be 'res.data.results'
// --- ... which holds the game array returned from the back-end
// --- g) Need to indicate the generic type to a '<Game[]>' (Game type array) in the useState of
// --- ... the 'games' state variable

// 14.- Now add the '.catch' clause to assign 'err.message' to the setError function to store the
// --- error message in the 'error' state variable

// 15.- For this moment (to keep it simple) we will only render the unordered list of games (not with the cards
// --- whose implementation will be defined later). Using the .map method will get each game from the array
// --- and map them into <li> items with the 'id' and 'name' properties of 'game'

// 16.- Now in App component we´re going to render the 'GamesGrid' component ->(16)

// 17.- in case of an error we need to show it

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client"; // <-(12)
import { Text } from "@chakra-ui/react";

interface Game {
  // <-(13.b)
  id: string;
  name: string;
}

interface FetchGamesResponse {
  // <-(13.a)
  count: number;
  results: Game[]; // <-(13.c)
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]); // <-(9),    // <-(13.g) indicate the generic type to a '<Game[]>'
  const [error, setError] = useState(""); // <-(10)

  useEffect(() => {
    // <-(11)
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results)) // <-(13.f) The error here because we defined 'setGames[]' to an empty array,
      //                                        so ->(13.g)
      .catch((err) => setError(err.message)); // <-(14)
  });

  // /* (15)-> render the list of games in the 'games' state array variable */
  return (
    <>
      {/* (17)-> In case of error */}
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
