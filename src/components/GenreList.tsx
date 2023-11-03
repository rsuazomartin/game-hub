// Section 8- Building a Video Game Discovery App

// Lesson 22- Highlighting the Selected Genre

// These lesson is to highlight the Genre name when selected (this selection is passed from the App component),
// --- so we need to >-(1)-> add the "selectedGenre: Genre | null" to the Props, so in this component, when we are
// --- rendering the <Button> chakra component, se should weight the font to bold when selected or normal
// --- when unselected

// 2.- Now, while rendering the <Button> we should test if the "genre.id === selectedGenre.id" and
// --- bold it if true or normal otherwise

// 3.- Once our 'GenreList' component renders bold or normal the 'fontWeight' for the genre, we go to the App
// --- component to receive the 'selectedGenre' from this component

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

// >-(1)-> modify the 'Props' to add the selectedGenre and >-(1.a)_> include it on the parameters
// --- of the 'GenreList' function
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

// >-(1.a)-> insert the 'Props' as parameters in the 'GenreList' function
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              // >-(2)-> render the font as bold or normal
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
