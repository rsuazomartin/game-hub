// Section 8- Building a Video Game Discovery App

// Lesson 25- Refactoring- Extracting a Query Object

// ACTUAL SITUATION.- Ok, Here we have a code that is a pair of references to state
// --- variables, and as our application goes on, it will be more like sort order, search phrases, etc.
// --- and because of this our code is ugly, clothed and larger. It´s better to pack related variabes
// --- inside of an object that handles all variables and states that we need, using what we call a
// --- query object pattern, creating a query object that handles all the info we need to query
// --- the games database

// 1.- We will create an interface called 'gameQuery' with 2 properties: 'genre: Ganer | null', and a
// --- 'platform: Platform | null' >-(1)->

// 2.- Replace this 2 cons [selected...] with a new state variable: of type <GameQuery> inicitalized to an
// --- empty object '{} as GameQuery' and call it 'gameQuery' and the function 'setGameQuery' to update it

// 3.- Now we need to update all the references to the previous state variables 'selectedGenre',
// --- 'setSelectedGenre', 'selectedPlatform' and 'setSelectedPlatform' that now are in error >-(3)->

// 4.- Now we need to apply the same techniche in our 'GameGrid', so go there >-(4)->

import { Grid, GridItem, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";

// >-(1)-> Create interface GameQuery with genre and platform properties
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // >-(2)-> remove this 2 ugly const
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  // >-(2)->
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            //  >-(3)-> change all references to the previous state variables
            selectedGenre={gameQuery.genre}
            //  >-(3)-> change all references to the previous state variables, spreaging the 'gameQuery'
            // --- properties and then add the genre (to update it)
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          //  >-(3)-> change all references to the previous state variables
          selectedPlatform={gameQuery.platform}
          //  >-(3)-> change all references to the previous state variables, spreaging the 'gameQuery'
          // --- properties and then add the platform (to update it)
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid
          // >-(3)-> here we pass the new 'gameQuery' query object
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
