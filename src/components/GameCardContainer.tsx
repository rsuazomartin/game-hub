// Section 8- Building a Video Game Discovery App

// Lesson 19- Displaying the Genres

// 5.- We came here >-(5)-> from the App component to change the fixed width of the <box> component to a adjustable width.
// --- This is done by either specifying no width or width='100%' (is the default width)

// 6.- There´s too much space between cards so go the our GameGrid to reduce this space >-(6)->

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    // >-(5)-> specifying no width or width='100%' (is the default width)
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
