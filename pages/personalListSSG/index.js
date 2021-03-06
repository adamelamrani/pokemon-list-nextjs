import StyledList from "../../components/Styles/StyledList";

/* eslint-disable @next/next/no-img-element */
const PersonalListSSG = ({ pokeList }) => {
  return (
    <>
      <StyledList>
        {pokeList.map((pokemon) => (
          <>
            <li key={pokemon.id}>
              <div>
                <img
                  height="100px"
                  width="100px"
                  src={pokemon.sprites.other.home.front_default}
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

export const getServerSideProps = async () => {
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

export default PersonalListSSG;
