// Section 8- Building a Video Game Discovery App

// Lesson 35- Adding Emojis

// ACTUAL SITUATION.- We want to add some fun to our game cards addin emojis based on the 'rating_top'
// --- property of our 'Game' interface

// >-(3)-> We came here from the 'useGames' hook to assign the emoji to each game. For this we need to
// --- receive the rating of the game as a Prop, so create the interface needed, and next
// --- >-(3.a)-> include this property in the 'Emoji' function

// 4.- import the images from the 'asset' folder

// 5.- We´re going to use a map object to map each rating frame to an emoji

// 6.- Now we need to add it to our 'GameCard' go there >-(6)->

// 7.- Our component it´s ready, so let´s add it to our 'GameCards' component >-(7)->

// >-(8)->.- We return here from the 'GameCard' cause emoji it´s to much close to the game name,
// --- give it a marginTop={2}, and the bullsEye it´s smaller than the other, givit a dynamic size in
// --- the EmojiMap adding a new property called 'boxSize:' that´s the beauty of the use of the EmojiMap,
// --- there´s no need to specify all this modifications below in the code

// TESTING CHANGES.- Good!

// END OF LESSON.- Commit our changes as "35: Add emojis"

// >-(4)-> import the images from the 'asset' folder
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

// >-(3)-> create the interface Props to receive the rating from the 'useGames' hook
interface Props {
  rating: number;
}

// --- >-(3.a)-> include the 'rating' property in the 'Emoji' function
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // >-(5)-> Here we use a map object to map each rating frame to an emoji
  const emojiMap: { [key: number]: ImageProps } = {
    // >-(5.a)-> here [key: number] (index signature) tells the compiler that
    // --- the emojiMap can have any number of values an this is annotated with 'ImageProps' which is a chakra
    // --- defines the props available on the <Image> component
    // >-(8)-> add boxSize for each emojiMap object
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
    // >-(5.b)-> here, based in the value of 'rating' we´ll assign a 'src:' with its 'alt' (descripcion)
  };

  return (
    // Here we´ll render an object that spreads the emojiMap array, indexing it by rating
    <Image {...emojiMap[rating]} marginTop={1} />
  );
};

export default Emoji;
