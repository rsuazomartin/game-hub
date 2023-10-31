// Section 8- Building a Video Game Discovery App

// Lesson 18- Creating a Generic Data Fetching Hook

// >-(9)-> We came here from the 'useData' new hook to test our new hook

// 10.- Change 'genre' and 'genres' for 'data'

// 11.- Now the problem here is that our component deal with providing the 'endpoint' to the HTTP request,
// --- assigning "/genres" to it, and should give this responsibility to the 'useGenres' hook, so
// --- first >-(11)-> go there and to some changes and then comeback.

// >-(13)-> We came here from the module to do some changes. First we must change 'useData' for 'useGenres()'
// --- and remove all unused import statements [Ctrl+.]. And see if our application is still working. Good !!

// NOW WE MUST GO TO THE GAMES FETCH SCHEME AND MODIFY IT USING OUR NEW GENERIC DATA FETCHING HOOK
// --- so, >-(14)-> go to the 'useGames' hook to modify it

import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // >-(10)-> Change 'genre' and 'genres' for 'data'
  // >-(13)-> Now we must change 'useData' for 'useGenres()'
  const { data } = useGenres();
  return (
    <ul>
      {/* >-(10)-> Change 'genre' and 'genres' for 'data' */}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
