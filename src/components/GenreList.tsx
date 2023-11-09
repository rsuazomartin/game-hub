// Section 8- Building a Video Game Discovery App

// Lesson 33- Cleaning Up the Genres

// ACTUAL SITUATION.- Everything is working fine, but there are some issues with the details of the rendering
// --- of our genres. One it´s that the name its overlapping the image when large. We fix this with
// --- >-(1)-> whiteSpace="normal"

// 2.- Our images aspect ratio it´s sometimes different because we are importing images of 600 x 400 px and
// --- we are showing them in boxes 32 y 32 px. To fix it just add an 'objectFit="cover"' in the <Image>
// --- component, with this our images will be scaled to fill the container while preserving it´s aspect
// --- ratio

// 3.- The other thing is that we don´t have a heading for the genres, so do it and assign it a "fontSize='2xl'"
// --- and add a 'marginBottom={3}'

// TESTING OUR CHANGES... Super!

// END OF LESSON.- Commit our code with name "33: Clean up the genre list"
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import { wrap } from "framer-motion";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {/* >-(1)-> whiteSpace="normal" and textAling="left */}
                <Text textAlign="left" whiteSpace="normal">
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
