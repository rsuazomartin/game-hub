// Section 8- Project: Building a Video Game Discovery App

// Section 27- Sorting Games

// ACTUAL SITUATION.- Now that we have our 'SortSelector' in place, using the same approach as filtering,
// --- when the user selects a sort order, this should be notified to the 'App' component and the 'App'
// --- component pass the new sort order to the 'GameGrid' component

// 1.- To implement ordering, we find the 'ordering' under 'Query Parameters' of 'Get a list of games'
// --- option. Found that we can set it to one of the values shown there: name, released, added, created,
// --- and so on. You can reverse the order of the sort order, prefix it with a minus '-'.

// 2.- Now we should store all the sort orders in an array and then map each item of the array to a
// --- menu item, so up we define the array sortOrders which will have one object for each array item
// --- and each object will have two properties: value (to send to the server) and a label (to show it),
// --- like this { value: "", label: "Relevance" } (in case of relevance, value is empty string because
// --- it´s the default value)

// 3.- With the 'SortSelector' array in place we can get rid of the hard coded values of the dropdown below
// --- using the method map for the 'sortOrders' array. To pass the choice to the App component,
// --- we need a Props interface with one property called 'onSelectSortOrder' >-(3.a)-> which is a function
// --- passing the variable 'sortOrder: string' as parameter (which is 'order.value' from
// --- the 'onClick' event below)

// 4.- We are done with our 'SortSelector' component and now go to the App component to update the sort order
// --- to our query object >-(8)->

// >-(7)-> We returned here from the App component to add the 'sortOrder' property to the Props
// --- >-(7)-> here we´re going to make other changes. >-(7.a)-> include the 'sortOrder' in the Props
// --- received by the 'SortSelector' function

// 8.- Now we need to change the label "relevance" by the 'label' of the option chosen by the user. To
// --- do this we need to create a variable called 'currentSortOrder' and try to find an order.value ===
// --- to the 'sortOrder' Prop in the 'sortOrders' array of objects (choices) to assign it it´s 'label'

// 9.- Now, instead of rendering 'Order by:' Relevance, we replace relevance with 'currentSortOrder?.label'
// --- if not falsy, otherwise render "Relevance" >-(9)->

// TESTING THE APP.- Lovely ! so

// END OF LESSON.- it´s time to commit our changes "Sort the games"

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// >-(7)-> Add 'sortOrder: string' to the Props
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

// // >-(7.a)-> add sortOrder to the parameters received by the 'SortSelector' function
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    // >-(2)-> The ones with '-' prefixed are those who we want to show the earlies first (dates) or
    // --- the highests values first (average rating, popularity).
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // >-(8)-> map the 'sortOrders' array of objects to find the 'value' corresponding to
  // --- the 'sortOrder' Props to assign its 'label' to 'currentSortOrder'
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* >-(9)-> replace "Relevance" with currentSortOrder?.label if the last is truthy */}
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {/* >-(3)-> map the sortOrders passing each order to the 'onSelectOrder' 
        --- function with the parameter 'order.value' of the option choosen */}
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
