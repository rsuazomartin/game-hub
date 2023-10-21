// Section 8- Building a Video Game Discovery App

// Lesson 9- Fetching the Games

// From the 'GameGrid' component ->(16).- we´re going to render here the 'GameGrid' component
// --- a) import GameGrid
// --- b) render the 'GameGrid' component in the 'main' area

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid"; // <-(16.a)

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
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
