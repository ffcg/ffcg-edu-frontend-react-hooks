import React from "react";

async function fetchPokemon(id = "") {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    return await res.json();
  } else {
    return Promise.reject();
  }
}

// Assignment:
// 0. Check the comment block in the code below
// 1. Declare a new function named `usePokemon`
// 2. Take `index` as an argument
// 3. Move the pokemon `useState(null)` hook and `useEffect()` hooks into the body of that function
// 4. Return `pokemon` from that function
// 5. In App, call the new Hook `usePokemon(index)` and assign it's return to `pokemon`
// You've just made a custom Hook

function Pokemon({ name, props }) {
  return <h1 {...props}>{name}</h1>;
}

export default function CustomHooks() {
  let [index, setIndex] = React.useState(1);
  let [pokemon, setPokemon] = React.useState(null);

  
  React.useEffect(() => {
    fetchPokemon(index).then(json => setPokemon(json));
  }); // <-- no dependecy array, check network tab

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
