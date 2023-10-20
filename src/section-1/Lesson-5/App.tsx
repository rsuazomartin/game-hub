// Section 8- Building a Video Game Discovery App

// Lesson 5- Creating a Responsive Layout

// The objective of this lesson will be creating a responsible layout with the components of our project
// two navigation bars, one aside (Left) and the body element.
// 1.- So first we are going to define a grid (imported from @chakra-iu/react) in our App as HTML markup in the first column we will have
// --- our navigation bars and one for the main area
// 2.- Inside our Gird, we will define some GridItems: nav, aside and main, telling the area wher every GridItem will
// --- go.
// 3.- In mobil devices we want to hide the aside panel and have a single column. So instead of having a string to
// --- define our areas, we are going to define an object, using properties (like base, sm, lg and xl etc) to define
// --- the beackpoints (you can go to the Chakra website and look for 'styled systems' and then 'responsive styles'
// --- to learn more)
// 4.- As we always are rendering aside panel even in mobile devices, we have to condition its appearance within a 'show'
// --- component. It has properties as above and below. If we put 'above' its value will be used for the size (or above)
// --- specified in its 'value'
// 5.- As everything it´s nice its time to commit our changes to git with the name of 'Build a responsive layout'

import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}> // <-(1.) commented for (3.)
    // (3.)->
    <Grid
      templateAreas={{
        base: `"nav" "main"` /* <-(3) on mobile devices we will only have one column*/,
        lg: `"nav nav" "aside main"` /* <-(3) on large devices we will have the two columns layout (>1024px) */,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        {" "}
        {/* <-(4) To be shown only on large devices (1024px) and above */}
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
