// Section 8- Building a Video Game Discovery App

// Lesson 17- Fetching the Genres

// ACTUAL SITUATION.-
// Everything is working fine, so it´s time to start building our Aside panel where we eventually will place
// --- the list of Genres of the games, so when we click on a Genre, our GameGrid will only show the games
// --- pertaining to the choosen Genre.

// 8.- Now came here from the 'GenreList' component to render the new <GenreList> component  >-(8)->.
// --- we´ll instert this instead of the <div> inside the 'Aside' area

// END OF LESSON.- It´s all for now, so commit our changes with the name "Fetch the genres"

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid"; // <-(16.a)
import GenreList from "../components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          {/*  >-(8)-> Insert the <GenreList> component*/}
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
