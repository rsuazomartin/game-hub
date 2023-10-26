// Section 8- Building a Video Game Discovery App

// Lesson 16- Refactor- Removing Duplicated Styles

// We have duplication of styles in the 'GameCards' component. So we decided to >-(1)-> create another component
// --- named 'GameCardContnainer.tsx' (this one) to be the container for our cards, and then apply all the
// --- styles for that container.

// 2.- In this container we are going to return a <Box> which is primitive components in chakraUI, that when it´s
// .--- rendered returns a <div>. Now we´re going to apply those styles to this <Box>.

// 3.- So we >-(3)-> remove them from the <Card> component in the 'GameCards' component and insert them here.

// 4.- We should also >-(4)-> remove them from the <GameCardSkeleton> component in the 'Card' component.

// 5.- Now we only have one place shere we define our <Card> styles. Now we have to pass the 'GameCards' and
// --- the 'GameCardSkeleton' as a child of this component throu an interface for our 'Props' as a 'children': of
// --- type 'ReactNode' from 'react' and >-(5.a)-> import the {children}: of type 'Props'

// 6.- Render the children prop inside of the <Box>

// 7.- No go to the 'GameGrid' component and first wrap the <GameCardSkeleton /> into the <GameCardContainer>

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  // <-(5)-< Define the shape of Props to import
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  // <-(5.a)-< import the 'props'
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {/* <-(6)-< Render the {children} inside of the <Box> */}
      {children}
    </Box> // <-(2)-< Add the Box Container >,     // <-(3)-< cut and paste here the styles in 'GameCards'
  );
};

export default GameCardContainer;
