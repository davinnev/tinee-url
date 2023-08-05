import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      url: url,
      customHash: "",
    };

    // Send a POST request to your Next.js API endpoint
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/shorten-url`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // Handle the response
    if (response.ok) {
      // Request was successful
      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } else {
      // Request failed
      console.log("Request failed");
    }
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputbox}
              type="text"
              id="fname"
              name="fname"
              placeholder="Input original URL here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className={styles.button} href="" type="submit">
              Shorten URL!
            </button>
          </form>
          <br />
          <p></p>
        </section>
      </main>
    </div>
  );
}
