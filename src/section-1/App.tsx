// Section 8- Building a Video Game Discovery App

// Lesson 8- Building the Color Mode Switch

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

// ->(8) Remove the bg colors of the main and aside areas

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
      {/* (8)-> remove the bg color for the main and aside grid items */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
