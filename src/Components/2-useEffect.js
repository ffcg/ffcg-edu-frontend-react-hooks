import React, { useEffect } from "react";

async function fetchPokemon(id = "") {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    return await res.json();
  } else {
    return Promise.reject();
  }
}

// Assignment:
// 1. Call the React.useEffect() function in the app component
// 2. Give React.useEffect a function that calls fetchPokemon(index) for data
// 3. Chain a `.then()` onto fetchPokemon(index) that logs out the returned json

const collection = [
  { name: "Bulbasaur" },
  { name: "Ivysaur" },
  { name: "Venusaur" }
];

function Pokemon({ name, props }) {
  return <h1 {...props}>{name}</h1>;
}

export default function UseEffect() {
  let [index, setIndex] = React.useState(0);
  let pokemon = collection[index];

  return (
    <div>
      <button type="button" onClick={() => setIndex(index + 1)}>
        Next
      </button>

      {pokemon ? (
        <Pokemon name={pokemon.name} />
      ) : (
        <div>no pokemon for {index}</div>
      )}
    </div>
  );
}