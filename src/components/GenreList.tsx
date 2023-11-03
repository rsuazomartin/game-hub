// Section 8- Building a Video Game Discovery App

// Lesson 21- Filtering Games by Genre

// ACTUAL SITUATION.-Everything looks good. So our next step is filtering the games by genre

// 1.- The first thing is to add a <Button> chakra componene instead of the <Text> one for the name
// --- of the Genre >-(1)-> and variant='link' to switch our button with a link. Now >-(1.a)->
// --- set the selected Genre and log it on the console.- This is the Genre which we´re currently
// --- rendering

// IMPORTAN.- Now the GenreList component should inform this App component that it the 'selectedGenre' must be set
// --- because the component that defines the state should be the only one to update it. So goto >-(4)-> the GenreList
// --- component to create a 'Props' that holds a call-back function to pass the 'genre' info here.

// 5.- Include the '{ onSelectGenre }: Props' as parameter in the 'GenreList' function

// 6.- Finally, instead of login on the console the selected 'genre', we´ll pass it to 'onSelectGenre' call-back function
// --- of the 'Props' interface

// NOW WE HAVE An ERROR IN THE App COMPONENT. >-(7)-> Go there, it´s because we don´t have passed this 'Props'
// --- to our <GenreList> component

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

// >-(4)-> create a 'Props' that holds a function to pass the 'genre' to the App component importing the type 'Genre'
// --- from the 'useGenres' hook
interface Props {
  onSelectGenre: (genre: Genre) => void;
}

// >-(5)-> insert the 'Props' as parameters in the 'GenreList' function
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            {/*  >-(1)-> /  >-(1.a)-> */}
            <Button
              variant="link"
              fontSize="lg"
              // >-(6)-> pass 'genre' as parameter to the 'onSelectGenre' call-back function when 'onClick'
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
