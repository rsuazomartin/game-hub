// Section 8- Building a Video Game Discovery App

// Lesson 6- Building the Navigation Bar

// ->(6) remove the bg color for the NavBar grid item

// Now make a new commit to the git repository with the name "Build the navigation bar"

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

// (4)->

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* (6)-> remove the bg color for the NavBar grid item */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
