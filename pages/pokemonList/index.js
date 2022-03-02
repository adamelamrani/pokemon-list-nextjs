/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import StyledList from "../../components/Styles/StyledList";
const PokemonList = () => {
  const [pokemons, setPokemon] = useState([]);
  useEffect(
    () =>
      (async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_POKE_API);
        const { results } = await response.json();

        const imgData = results.map(async (pokemonStats) => {
          const response = await fetch(pokemonStats.url);
          const cosa = await response.json();
          return cosa;
        });
        setPokemon(await Promise.all(imgData));
      })(),
    []
  );
  return (
    <>
      <StyledList>
        {pokemons &&
          pokemons.map((pokemon) => (
            <>
              <li key={pokemon.id} onClick>
                <div>
                  <img
                    height="100px"
                    width="100px"
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Image of ${pokemon.name}`}
                  />
                  <p>{pokemon.name}</p>
                </div>
              </li>
            </>
          ))}
      </StyledList>
    </>
  );
};

export default PokemonList;
