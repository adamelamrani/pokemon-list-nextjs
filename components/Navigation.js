import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"home"}>Home</Link>
        </li>
        <li>
          <Link href={"pokemonList"}>Pokemon list</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
