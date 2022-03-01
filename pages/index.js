import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Layout from "./Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.container}>Pokiman peich</div>
      </Layout>
    </>
  );
}
