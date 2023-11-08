// Section 8- Building a Video Game Discovery App

// Section 27- Sorting Games

// >-(4)->.- We came here from our 'SortSelector' component to pass the sort order to our
// --- query object >-(8)-> First we add the 'sortOrder: string' property to our 'GameQuery' Query object.
// --- In the next render the 'gameQuery' object will be passed to the 'GameGrid' (inspecting this
// --- component we see there isn´t need to do anything as it already uses the 'GameQuery' object)

// 5.- But we need to update the 'useGames' hook according to the 'sortOrder' (ordering) parameter which
// --- has to be passed to our RAWG API >-(5)->

//  >-(6)-> We came here from the 'useGames' hook to pass the current sort order to the
// --- 'SortSelector' component. Now the 'sortOrder' property gives error because must be added to the Props
// --- in the 'SortSelector' component, so >-(7)-> go there to make this changes

import { Grid, GridItem, HStack, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components/SortSelector";

// >-(4)-> Add sortOrder: string to our 'GameQuery' query object
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
        <NavBar />
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
        <HStack spacing={5} paddingLeft={1} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          {/* >-(3)-> change the 'sortOrder' property of the 'gameQuery' query object to re-render 
          --- on the <SortSelector> component */}
          <SortSelector
            //  >-(6)-> pass the 'sortOrder' to the SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
