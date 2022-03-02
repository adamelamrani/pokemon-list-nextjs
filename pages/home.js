import styled from "styled-components";

const home = () => {
  const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      width: 800px;
    }
  `;

  return (
    <>
      <StyledHome>
        <h1>Low-cost sad-looking Pokémon page</h1>
        <p className="home-p">
          Pokémon[a] is a series of video games developed by Game Freak and
          published by Nintendo and The Pokémon Company under the Pokémon media
          franchise. Created by Satoshi Tajiri with assistance from Ken
          Sugimori, the first games, Pocket Monsters Red and Green, released in
          1996 in Japan for the Game Boy, later released outside of Japan as
          Pokémon Red and Blue. The main series of role-playing video games
          (RPGs), referred as the core series by their developers,[1][2][3] have
          continued on each generation of Nintendo handhelds. The most recently
          released core series game, Pokémon Legends: Arceus, was released on
          January 28, 2022, for the Nintendo Switch. It is a prequel to the 2006
          Nintendo DS games Pokémon Diamond and Pearl. The core games are
          released in generations, each with different Pokémon, storylines, and
          characters. Remakes of the games are usually released around a decade
          after the original versions for the latest console at the time. While
          the main series consists of RPGs developed by Game Freak, many
          spin-off games based on the series have been developed by various
          companies, encompassing other genres such as action role-playing,
          puzzle, fighting, and digital pet games..
        </p>
      </StyledHome>
    </>
  );
};

export default home;
