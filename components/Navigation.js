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
        <li>
          <Link href={"PersonalListSSG"}>Pokemon list SSG</Link>
        </li>
        <li>
          <Link href={"PersonalListISR"}>Pokemon list ISR</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
