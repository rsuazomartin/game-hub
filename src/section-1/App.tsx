// Section 8- Building a Video Game Discovery App

// Lesson 22- Highlighting the Selected Genre

// >-(3)-> Once our 'GenreList' component renders bold or normal the 'fontWeight' for the genre, we came here
// --- to receive (include) the 'selectedGenre' Prop to the 'GenreList' component, as 'selectedGenre={selectedGenre}'

// END OF LESSON.- It´s time to commit our code with name "Highlight the selected genre"

import { Grid, GridItem, Show, baseTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";

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
            // >-(3)-> include the selectedGenre={selectedGenre} in the <Button> chakra component
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
