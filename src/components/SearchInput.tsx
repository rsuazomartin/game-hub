// Section 8.- Project: Building a Video Game Discovery App

// Lesson 31- Searching Games

// ACTUAL SITUATION.- Now we have to implement the game search function. To implement searching we´ll
// --- use the same aproach as before. The SearchInput component will notify the App component and the App
// --- component takes the search text, store it in our query object (gameQuery) and pass it to
// --- the GameGrid component exactly like before.

// 1.- First here in the 'SearchInput' function, we wrap all the <InputGroup> into a <form> HTML component...
// --- we don´t need the 'action' argument but the 'onSubmit' function to take the (event) to passit to a function
// --- that 'preventDefault()' which is post the form inmediately to the server.

// 2.- Now we want to get access to the value of this input field. We´ll need to define a 'const' object
// --- (with our input components) called 'ref' where we´ll store the result of the 'useRef' hook (to access
// --- the input data directly from the DOM) of type <HTMLInputElement> initialized to 'null'.

/* REACT NOTES on the useRef hook: 
  useRef returns an object with a single property: 'current:' Initially, 
  it’s set to the initialValue you have passed. You can later set it to something else. If you pass the 
  ref object to React as a ref attribute to a JSX node, React will set its 'current' property.
  On the next renders, useRef will return the same object.
*/

// 3.- Now we need to associate this 'ref' object with our 'Input' component with the argument 'ref={ref}'
// --- in the <Input> component

// 4.- For now just log on the console the result of this 're.current.value' if 'ref.current' is truthy when
// --- processing the 'onSubmit' event.

// TESTING OUR APP... The search field shrunk because we didn´t tell the compiler the width of the input
// --- element, so the better way is to modify the global styles in the 'index.css' file >-(5)-> go there
// --- and do a 'form { width: 100%; }'. TESTING... Cute! Now, if we type 'something' on the search input
// --- field should appear in the console... LOOKING... Right!

// 5.- Now we should pass this to the 'App' component. We will create an interface Props with a property which
// --- is a function called onSearch: that takes a 'searchText: string' and returns 'void' >-(5)-> This is
// --- with the purpose to pass it to its parent component

// 6.- And instead of login the input data to the console, we should pass it to this onSearch function as
// --- a parameter

// 7.- Now we go to the App component >-(7)->

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  //>-(2)-> Create const 'ref' to store the input in case of 'onSubmit' (enter key pressed)
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // >-(6)-> pass 'ref.current.value' to 'onSearch'
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      {/* >-(1)-> Create an <InputGroup> chakra component */}
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        {/* >-(3)-> insert the reference to {ref} in 'ref' to associate 'useRef' result 'ref' object with 
        ... the input data */}
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
