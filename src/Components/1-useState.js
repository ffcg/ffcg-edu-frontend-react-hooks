import React, {useState} from "react";

// Assignment:
// 1. Use the React.useState function to wrap our `index` state
// 2. Use array destructuring assignment to name the first and second elements of the Array React.useState returns
//   * [index]
//   * [index, setIndex]
// 3. Use the `setIndex` function to respond to button clicks and update the index

// Extra credit:
// When there's no pokemon to show, show something different

const collection = [
  { name: "Bulbasaur" },
  { name: "Ivysaur" },
  { name: "Venussaur" }
];

function Pokemon({ name, props }) {
  return <h1 {...props}>{name}</h1>;
}

export default function UseState() {
  let index = 0;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          /* update state here */
          alert(
            "Use the update function — returned by React.useState — to progress the next index"
          );
        }}
      >
        Next
      </button>

      <Pokemon name={collection[index].name} />
    </div>
  );
}
