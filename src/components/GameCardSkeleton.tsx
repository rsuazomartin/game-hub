// Section 8- Building a Video Game Discovery App

// Lesson 16- Refactor- Removing Duplicated Styles

// To avoid duplicated styles, we´ll >-(4)-> remove the <Card> styles (noew in the 'GameCardContainer' component)

import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    // >-(4)-> Remove the style atributes from the <Card> component
    <Card>
      <Skeleton>
        <CardBody height="325px">
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
