// Section 8- Building a Video Game Discovery App

// Lesson 32- Adding Dynamic Heading

// >-(4)->.- We came here from our new 'GameHeading' component, to render our <GameHeading> component >-(4)->
// --- TESTING IT... it shows 'undefined undefined games', easy to fix. just render only if it´s truthy or else
// --- an empty string... TESTING AGAIN... Fine! But we need space at the bottom and a larger font size, and
// --- also it´ll be better to align both (the heading and the Flex) into a <Box> component and assign the
// --- padding in only one place, the new Box.

// TESTING OUR APP.- Fine!

// END OF LESSON.- Nos it´s time to commit our code under "32 Add a dynamic page heading"

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
import GameHeading from "../components/GameHeading";

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
        {/* >-(4)-> render the new <GameHeading> commponent inside a <Box> along with the previous <Flex> */}
        <Box paddingLeft={1}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
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
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
