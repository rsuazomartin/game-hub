// Section 8- Building a Video Game Discovery App

import { Badge } from "@chakra-ui/react";

// Lesson 13- Displaying Critic Score

// ACTUAL SITUATION.-
// We need to add a critic´s score assigned as "metacritic: number" under the 'results' in the chrome dev tools
// --- that we can find under object 'genres'. The color of this score goes lighter as higher.

// From the 'useGames' component -(2)-> Here we add a new component called 'CriticScore.tsx' under
// --- the 'components' folder to manage the render of this score.

// 3.- We need a Props for receiving the score property and deconstruct it in the 'CriticScore' function parameters.

// 4.- We render the <Badge> component from chakraUI and render the 'score' right there, so back -(5)-> to
// --- our 'GameCards' component let´s add the render of the <CriticScore> component

// -(5)->.- Back to 'CriticScore' component We´ll improve the look and feel of this badge, with fontSize='14px'
// --- paddingX={2} (more space for the score inside the badge),  borderRadius="4px" (rounder corners).
// --- ... (5.a).- As the color should be lighter as higher the score, will create a "color" variable
// --- ... and give it a value depending on the score. 'green' if > 90 otherwise yellow if > 80 otherwise "".
// --- ... The pass the 'color' variable to the parameter 'colorScheme'

// END OF LESSON.- So let´s commit our code to the git repository with name "Displaying critic score"

interface Props {
  // <-(3)-
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : ""; // <-(5.a)
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  ); // <-(4)-
};

export default CriticScore;
