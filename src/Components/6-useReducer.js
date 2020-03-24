import React from "react";

// Assignment:
// Update useReducer to use an action
// { type: "action_name", payload: theData }

export default function App() {
  // START HERE
  let [pokemon, dispatch] = React.useReducer((state, newState) => {
    return newState;
  }, null);
  let collection = usePokemon("");

  return (
    <div>
      {pokemon ? (
        <Pokemon name={pokemon.name} />
      ) : (
        <div>Select a Pokemon...</div>
      )}

      {collection ? (
        <PokemonList
          as="div"
          items={collection.results}
          renderItem={pokemon => (
            <div key={pokemon.name}>
              <button
                type="button"
                onClick={() =>
                  getJson(pokemon.url).then(json => dispatch(json))
                }
              >
                {pokemon.name}
              </button>
            </div>
          )}
        />
      ) : (
        <div>Fetching pokemon...</div>
      )}
    </div>
  );
}

function PokemonList({ className = "", ...props }) {
  return (
    <List className={["PokemonList", className].join(" ").trim()} {...props} />
  );
}

function List({
  as: As = React.Fragment,
  items,
  renderItem = pokemon => <li key={pokemon.name}>{pokemon.name}</li>,
  ...props
}) {
  return <As {...props}>{items.map(renderItem)}</As>;
}

async function getJson(url) {
  let res = await fetch(url);
  if (res.ok) {
    let json = await res.json();
    return json;
  } else {
    return Promise.reject();
  }
}

async function fetchPokemon(id = "") {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    let json = await res.json();
    return json;
  } else {
    return Promise.reject();
  }
}

function Pokemon({ name, props }) {
  return <h1 {...props}>{name}</h1>;
}

function usePokemon(index) {
  let [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetchPokemon(index).then(json => setPokemon(json));
  }, [index]);

  return pokemon;
}