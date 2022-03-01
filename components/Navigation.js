import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"home"}>Home</Link>
        </li>
        <li>
          <Link href={"PokemonList"}>Pokemon list CSR</Link>
        </li>
        <li>
          <Link href={"PersonalList"}>Pokemon list SSR</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
