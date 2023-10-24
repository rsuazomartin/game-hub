// Section 8- Building a Video Game Discovery App

// Lesson 13- Displaying Critic Score

// From the new 'CriticScore' component -(4)->.- We render the <Badge> component from chakraUI
// --- and render the 'score' right there, let´s add the render of the <CriticScore> component
// --- and set the "score={game.metacritic}". To render it aside the platform icons, we need to
// --- -(4.a)-> wrap this 2 components into an <HStack> chakraUI component and set the
// --- 'justify="space-between"'

// <-(5).- Back to our 'CriticScore' component We´ll improve the look and feel of this badge.

import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* -(4.a)->  */}
        <HStack justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* -(4)-> */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
