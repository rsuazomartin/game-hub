// Section 8- Building a Video Game Discovery App

// Lesson 11- Building Game Cards

// SITUATION.-
// The next step is to create the game cards in the main area to replace the unordered list. So, in the 'components'
// --- folder (1.)- Create a new componet file called 'GameCards.tsx' (This one) and create a component with
// --- 'rafce'

// (1)-> 'rafce' to create a component
// 2.- Now we need to pass a game object as a 'Props' to this component. So (2.a) first we use an interface to define
// --- ... the shape of 'Props' named as an object with a property called game: of the type 'Game', but as we currently
// --- ... doesn´t have access to the 'Game' interface because we didn´t exported it from our hook (useGames) module,
// --- ... we (3)-> go to the hook 'useGames' and export this interface

// ->(4).- We come here from the 'useGames' hook to import the 'Game' interface from '../hooks/useGames'. This is ugly
// --- but we don´t want to be distracted to what we´re doing right now, we´ll revisi it later

// 5.- Now add the Props to the GameCards function

// (6) Instead of returning a <div> we´ll return a 'Card' component from chakraUI and inside the 'Card' will do:
// --- ->(6.a) We need to add some 'rawg.io' returned game object properties to the 'Game' interface in the 'useGames' hook:

// --- (6.a.1) Insert an 'Image' component (chakraUI) and set the src='{game.background_image}' of the 'Image' component
// --- ... of the 'Card' component of the 'GameCards' component
// --- ... 6.a.2).- Now we need to add a 'CardBody' component right after the 'Image' component for the background
// --- ... 6.a.3).- Inside 'Cardbody', for now, we just add a 'Heading' component (chakraUI) with the 'game.name'
// --- ... ... property
// --- We are building the basic skeleton and then we´ll improve it step by step

// 7.- So we now go to the 'GameGrid' component

// From the 'GameGrid' component
// --- ->(8.a) we set 'borderRadius={10}' to improve it in the 'Card' component
// --- ... and "overflow='hidden'" to round all corners because upper corners were sharp because the
// --- ... 'background_image' was bigger than its container.
// --- ->(8.b) The other thing to improve is to set the 'fontSize='2xl'' of the heading. Go to 'chakra-ui.com'
// --- ... search for "font size" and see the options
// --- ->(8.c) Number of columns should be: mobile devices = 1 column, tablets= 2 columns and 3 or more columns in larger
// --- ... screens. so go to the 'GameGrid' component to do it

import React from "react";
import { Game } from "../hooks/useGames"; // <-(4) import the 'Game' interface
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  // (5)-> give it a game object as parameter
  return (
    <Card borderRadius={10} overflow="hidden">
      {" "}
      {/* (8.a)-> */}
      <Image src={game.background_image}></Image> {/* // <-(6.a.1) */}
      <CardBody>
        {/* (8.b)-> */}
        <Heading fontSize="2xl">{game.name}</Heading> {/* <-(6.a.3) */}
      </CardBody>{" "}
      {/* <-(6.a.2) */}
    </Card>
  ); // <-(6) Will return a 'Card' component from chakraUI
};

export default GameCards;
