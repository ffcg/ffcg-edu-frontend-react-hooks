import React from "react";
// Assignment:
// Put the state Reducer on `PokemonContext`

var PokemonContext = React.createContext();

function Pokemon(props) {
  let { name } = React.useContext(PokemonContext);
  return <h1 {...props}>{name}</h1>;
}

function usePokemon(index) {
  let [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetchPokemon(index).then(json => setPokemon(json));
  }, [index]);

  return pokemon;
}

export default function UseReducerWithUseContext() {
  let [{ pokemon }, dispatch] = React.useReducer(
    (state, action) => {
      if (action.type === "fetch_and_replace_pokemon") {
        getJson(action.payload).then(json =>
          dispatch({ type: "replace_pokemon", payload: json })
        );
        return state;
      }
      if (action.type === "replace_pokemon") {
        return { ...state, pokemon: action.payload };
      }
      throw new Error();
    },
    { pokemon: null }
  );

  let collection = usePokemon("");

  return (
    <div>
      {pokemon ? (
        <PokemonContext.Provider value={pokemon}>
          <Pokemon />
        </PokemonContext.Provider>
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
                  dispatch({
                    type: "fetch_and_replace_pokemon",
                    payload: pokemon.url
                  })
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