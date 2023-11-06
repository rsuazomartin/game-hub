// Section 8- Building a Video Game Discovery App

// Lesson 24- Filtering Games by Platform

// The purpose of this lesson is to pass another parameter (selectedPlatform) to the 'useData' hook
// --- to fetch only the games for the selected platform. Here we´ll use the same approach that the one
// --- we used to filter the games by genre.

// 1.- So, first we need to create an state variable to handle the changes in the selected platform
// --- to pass it to the 'GameGrid' for filtering. We´ll call it "selectedPlatform"

// 2.- Go to our 'PlatformSelector' component and when the user clicks on a Platform, we should
// --- notify this App component >-(2)->

// >-(4)->.- We came here from the 'PlatformSelector' component to add the 'onSelectPlatform'
// --- function as parameter in our <PlatformSelector> component(which is in error)

// TESTING.- If we click on a platform, we can see in the 'Components' tab that our App component
// --- has an object with our platform selected and updates every time we click on another platform, Fine!
// --- BUT no selection has been applied to our 'GameGrid', so we need to pass the 'selectedPlatform'

// 5.- So, in the <GameGrid> component rendering, we need to pass the 'selectedPlatform={selectedPlatform}'
// --- and as selectedPlatform is not defined here, we need to go the our 'GameGrid' component and
// --- add the 'selectedPlatform: Platform | null' to our interface 'Props' >-(5)->

// >-(8)->.- We came here from the 'useGames' hook to pass the 'selectedPlatform' (and set it to
// --- 'selectedPlatform') to our 'PlatformSelector' component, so it can use it as the label
// --- of the button. >-(8)->. It gives an error because we should add this property to the Props object
// ... defined in the 'PlatformSelector' component so we can pass it as a Prop, so go there and add it
// --- ... >-(9)->

import { Grid, GridItem, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <PlatformSelector
          // >-(8)-> add the selectedPlatform argument and set it to 'selectedPlatform'
          selectedPlatform={selectedPlatform}
          // >-(4)-> insert onSelectPlatform to setSelectedPlatform with the platform selected *
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
