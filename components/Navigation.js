import Link from "next/link";
import NavigationStyle from "./Styles/NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <ul>
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/pokemonList"}>Pokemon list CSR</Link>
        </li>
        <li>
          <Link href={"/personalList"}>Pokemon list SSR</Link>
        </li>
        <li>
          <Link href={"/personalListSSG"}>Pokemon list SSG</Link>
        </li>
        <li>
          <Link href={"/personalListISR"}>Pokemon list ISR</Link>
        </li>
      </ul>
    </NavigationStyle>
  );
};

export default Navigation;
