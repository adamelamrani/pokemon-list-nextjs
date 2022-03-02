import StyledList from "../../components/Styles/StyledList";

/* eslint-disable @next/next/no-img-element */
const PersonalListISR = ({ pokeList }) => {
  return (
    <>
      <StyledList>
        {pokeList.map((pokemon) => (
          <>
            <li key={pokemon.id}>
              <div>
                <img
                  height="70px"
                  width="70px"
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
