// Section 8- Building a Video Game Discovery App

// Lesson 19- Displaying the Genres

// >-(4.c)-> We came here from the 'GenreLIst' component to apply a padding to the "aside" area
// --- to give some space between off the edge of the screen, and also >-(4.d)-> give a fixed width to it
// --- so wouldn´t be problems when adding more real space, the gamegrid stretches to take up the
// --- available space. This is done creating an object with the widths of the base and lg size displays
// --- ... with the 'templateColums' specification.

// 5.- Now we have to chane the fixed width of <box> component the 'GameCardContainer' to a resizeable with.
// --- >-(5)-> Let´s go there

import { Grid, GridItem, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";

function App() {
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
        {/* >-(4.c)-> apply a padding to the "aside" area */}
        <GridItem area="aside" paddingX={5}>
          {" "}
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
