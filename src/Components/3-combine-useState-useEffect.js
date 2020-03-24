import React, {useState, useEffect} from "react";

async function fetchPokemon(id = "") {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (res.ok) {
      return await res.json();
    } else {
      return Promise.reject();
    }
  }
  
  // Assignment:
  // 1. Update the `let pokemon` assignment to get it's value from React.useState()
  // 2. Using destructuring assignment, take the second element of React.useState's return (our updater function) as `setPokemon`
  // 3. Replace console.log(json) with a call to setPokemon(json)
  
  const collection = [
    { name: "Bulbasaur" },
    { name: "Ivysaur" },
    { name: "Venusaur" }
  ];
  
  function Pokemon({ name, props }) {
    return <h1 {...props}>{name}</h1>;
  }
  
  export default function CombineUseStateUseEffect() {
    let [index, setIndex] = React.useState(0);
    let pokemon = collection[index];
  
    React.useEffect(() => {
      fetchPokemon(index).then(json => console.log(json));
    });
  
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