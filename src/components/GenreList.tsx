// Section 8- Building a Video Game Discovery App

// Lesson 17- Fetching the Genres

// ACTUAL SITUATION.-
// Everything is working fine, so it´s time to start building our Aside panel where we eventually will place
// --- the list of Genres of the games, so when we click on a Genre, our GameGrid will only show the games
// --- pertaining to the choosen Genre.

// 1.- The first step will be fetching the Genres, so we create another component called 'GenreList.tsx'
// --- (this file)

// 2.- To fetch the genre, we´re going to create a hook like the one for fetching the games, so we´re going
// --- to the 'hooks' folder and create a file called 'useGenres'

// 6.- We came here from the 'useGenres' new hook to >-(6)-> insert our 'useGenres' and
// --- import it  >-(6.a)->. We just will now display the list of genres in the browser

// 7.- Now we render our genres to an <ul> list mapping each item to a <li> item with key={gender.id}
// --- and rendering its name inside the <li>

// 8.- Now we go to the App component to render its 'GenreList' component  >-(8)->

import useGenres from "../hooks/useGenres"; //  <-(6.a)-< import useGenres

const GenreList = () => {
  const { genres } = useGenres(); // <-(6)-< Get the {genres} from the hook 'useGenres'
  return (
    // >-(7)-> render our genres to an <UL>
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
