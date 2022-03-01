/* eslint-disable @next/next/no-img-element */
import Layout from "./Layout";

const PersonalList = ({ pokeList }) => {
  return (
    <>
      <Layout>
        <ul>
          {pokeList.map((pokemon) => (
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

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_PRIVATE_API);
  const pokemons = await response.json();
  const imgData = pokemons.map(async (pokemonStats) => {
    const response = await fetch(pokemonStats.url);
    const cosa = await response.json();
    return cosa;
  });

  const pokeList = await Promise.all(imgData);
  return { props: { pokeList } };
};

export default PersonalList;
