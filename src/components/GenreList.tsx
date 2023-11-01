// Section 8- Building a Video Game Discovery App

// Lesson 20- Showing a Spinner

// 1.- We would like to show a spinner while our genre list is loading, so all we have to do here
// --- is to import the 'isLoading' state and show a <Spinner> chakra component if 'isLoading' is true

// 2.- in case we receive an error from the Genres fetch? Then >-(2)-> import the 'error' also, and return 'null'
// --- if the error occurs showing nothing

// END OF LESSON.- Once tested our changes, it´s time to commit our changes to git with name
// --- "Show a spinner while fetching the genres"

import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  // >-(1)-> Import isLoading, / >-(2)-> import error in case of errors
  const { data, isLoading, error } = useGenres();
  // >-(1.a) return the <Spinner> component if isLoading is true
  if (isLoading) return <Spinner />;
  // >-(2) return null if error is true
  if (error) return null;

  return (
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
