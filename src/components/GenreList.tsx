// Section 8- Building a Video Game Discovery App

// Lesson 19- Displaying the Genres

// 2.- We came here from the 'useGenres' service to >-(2)-> to use the chakra <List> component
// ... instead of the <ul>, similarly, we replace the <li>s with the <ListItem> defined in chakra

// 3.- In this <ListItem> specification, we need to replace the "{genre.name}" with and <HStack>
// --- inside it we need to create and <Image> chakra component with the values given below, and
// --- as we need the small images, we call 'getCroppedImageUrl' function under the
// --- 'image-url' service passing the parameter 'genre.image_background'

// 4.- Right after the image we render the '{genre.name}' under a <Text> chakra component, ant then
// --- test it in the browser.... Fine, but things to improve: >-(4.a)-> Need vertucal space between
// --- ... each genre, so vertical padding, so in the <ListItem paddingY="5px">, >-(4.b)-> fontSize='lg'
// --- ... in the <Text> component. >-(4.c)-> Apply a padding to the "aside" area in the App component

import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    // >-(2)-> to use the chakra <List> component and <ListItems> and >-(4)-> <HStack> component with
    // --- <Image> and <Text> chakra components
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          {" "}
          {/* >-(4.a)->  */}
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text> {/* >-(4.b)->  */}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
