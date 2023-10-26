// Section 8- Building a Video Game Discovery App

// Lesson 15- Loading Skeletons

// From the "useGame" componennt >-(2)->.- To render the "loading skeleton" for our user while is waiting, we must
// --- render him the game card skeleton instead of the game card, because they are not the same. This will be done
// --- here we created under the 'components' folder with the name of "GameCardSkeleton.tsx" (this file).

// 3.- To do this we will create a <Card> component and inside of it an <Skeleton> (another chakraUI component) and
// --- we can look at it as a place holder for an image that´s being loaded. We will give it a "height='200px'"
// --- (we must play with this value to see what fits best), and inside this <Skeleton>, >-(3.b)-> we will define a
// --- <CardBody> element as in the 'GameCards' component, but instead of the contents of the <CardBody> in our
// --- 'GameCards' component,  >-(3.c)-> we´ll render an "<SkeletonText />"

// 4.- Now we must go to our 'GameGrid' component to render the 'GameCardSkeleton' component >-(4)->

import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      {/* <-(3)-< Create a card */}
      <Skeleton>
        {/* <-(3.a)-< Create a Skeleton */}
        <CardBody height="325px">
          {/* <-(3.b)-< Create a CardBody */}
          <SkeletonText /> {/* <-(3.c)-< Create a SkeletonText */}
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
