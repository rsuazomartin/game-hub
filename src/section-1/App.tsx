// Section 8- Building a Video Game Discovery App

// Lesson 23- Building Platform Selector

// 2.- We came here from the new 'PlatformSelector' component to render the <PlatformSelector> component
// --- right above the <GameGrid> component >-(2)->

// TESTED.- Beautifull ! Now we should render this items dinamically. To do this we´ll use a diferent endpoint
// --- on RAWG api, si we look in the site documentation under 'Plarforms' and see that there´s an endpoint
// --- for parent platforms called "/platforms/lists/parents". So we´ll create a new hook called 'usePlatform'
// --- under the 'hooks' folder. Go there >-(3)->

import { Grid, GridItem, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/*  >-(2)-> render the 'PlatformSelector' component */}
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
