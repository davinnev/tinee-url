import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h3> TINEE URL </h3>
        <div className={styles.featlist}>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      <main>
        <section className={styles.hero}>
          <h1>Shorten your URLs and share them easily!</h1>
          <br />
          <form className={styles.form}>
            <input
              className={styles.inputbox}
              type="text"
              id="fname"
              name="fname"
              placeholder="Input original URL here"
            />
            <a className={styles.button} href="">
              Shorten URL!
            </a>
          </form>
          <br />
          <p></p>
        </section>
      </main>
    </div>
  );
}
