// Section 8- Building a Video Game Discovery App

// Lesson 31- Searching Games

// >-(7)-> We came here from the 'SearchInput' component to receive the input object. To do this, first we
// --- add the 'searchText' to our Query object (gameQuery).

// FOUND PROBLEM.- Our 'SearchInput' component it isn´t a direct child of the App component (you can search it!)
// --- but of the 'NavBar' component. So if we want to use the 'onSearch' function on the 'NavBar' component,
// --- we need to pass it from "SearchInput" to 'App' then from the 'App' to the 'NavBar' component.
// --- This is not practical, but we will do it this way for now; later in advanced topics
// --- we´ll learn a more elegant way.

// 8.- So, for now, se need to repeat in the 'NavBar' component the 'Props' object where the 'onSearch'
// --- function it´s passed from the 'SearchInput' to this 'App' component. So go to the NAvBar >-(8)->

// >-(9)-> We came here from the 'NavBar' cause we have an error: "La propiedad 'onSearch falta en el tipo {}',
// --- pero es obligatoria en el tipo 'Props'", so insert the "onSearch={onSearch}" in the render
// --- of the <NavBar /> component

// TESTING OUR ADVANCE SO FAR.- Typed some text in the search input field and look at the components tab
// --- in chrome-dev-tools under App component and see the 'searchText' with the text we typed... Good!

// 10.- Now we should pass this info to the 'useGames' hook to send it to the server >-(10)->

import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  baseTheme,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
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
        {/* >-(9-> Insert the "onSearch={(onSearch)... }" to the <NavBar /> component. This is the function
        --- that takes the new 'searchText' and pass it to the 'setGameQuery' function that as parameter
        --- sends an object which spread all the properties of the 'gameQuery' object and then updates the
        --- 'searchText' property (NOTE.- onSearch is the 'notification' of a search requirement by the 
        --- user and 'searchText' is the parameter that passes) */}
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingLeft={2}>
        {/* >-(1)-> Change 'HStack' for 'Flex', wrap 'PlataformSelector' in 'Box' and give it a paddingRight={5} */}
        <Flex paddingLeft={1} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
