/* eslint-disable @next/next/no-img-element */
const PersonalListISR = ({ pokeList }) => {
  return (
    <>
      <ul>
        {pokeList.map((pokemon) => (
          <>
            <li>
              <ul>
                <img
                  height="100px"
                  width="100px"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={`Image of ${pokemon.name}`}
                />
                <li>Name: {pokemon.name}</li>
              </ul>
            </li>
          </>
        ))}
      </ul>
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
  return {
    props: { pokeList },
    revalidate: 20,
  };
};

export default PersonalListISR;
