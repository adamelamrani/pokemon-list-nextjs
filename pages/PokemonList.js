/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
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
          console.log(cosa);
          return cosa;
        });
        setPokemon(await Promise.all(imgData));
      })(),
    []
  );
  console.log(pokemons);
  return (
    <>
      <Layout>
        <ul>
          {pokemons &&
            pokemons.map((pokemon) => (
              <>
                <li>
                  <ul>
                    <img
                      height="100px"
                      width="100px"
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={`Image of ${pokemon.name}`}
                    />
                    <li>Name: {pokemon.name}</li>
                  </ul>
                </li>
              </>
            ))}
        </ul>
      </Layout>
    </>
  );
};

export default PokemonList;
