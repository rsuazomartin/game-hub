// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// We came here from the 'GameGrid' component to >-(3)-> create an state variable to store the selected Genre. As the useState
// --- doesn´t know what is the type of the state (because of the null value), we need to specify (beween angle brackets)
// --- that this state is a generic type <Genre> or null.

// IMPORTAN.- Now the GenreList component should inform this App component that it the 'selectedGenre' must be set
// --- because the component that defines the state should be the only one to update it. So goto >-(4)-> the GenreList
// --- component to create a 'Props' that holds a function to pass the 'genre' info here.

// >-(7)-> WE CAME HERE FROM THE GenreList component because NOW WE HAVE An ERROR IN THIS COMPONENT. it´s because we don´t
// --- have passed this 'Props' to our <GenreList> component

// NOW TEST our progress up to here. inspect the Chrome-dev-tools and look in the components tab, look for the App component
// ... and see our hooks, we have a state variable and inside we find the genre object that holds the genre that
// ... we have choosen (try choose other genres and see that our object changes accordingly). PERFECT !!!

// NOW IT´S TIME TO PASS THE SELECTED GENRE TO THE GAMEGRID COMPONENT TO SHOW THE SELECTED GENRE´S GAMES, SO IT
// --- CAN PASS IT TO THE BACK-END WHILE FETCHING THE GAMES. So let´s go to >-(8)-> the 'GameGrid' component
// --- to continue

// >-(16)-> We came here from the 'useGames' component to pass the 'selectedGenre' to our 'GameGrid' component

// END OF LESSON.- Everything works fine, so it´s time to commit our code with name "Filter games by genre"

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
          {/* >-(7)-> Pass the 'genre' object to a function that 'setSelectedGenre' giving it (genre) as parameter */}
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* >-(16)-> Add selectedGenre={selectedGenre} to pass this parameter to the GameGrid */}
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
