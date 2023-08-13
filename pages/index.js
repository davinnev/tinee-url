import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");

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
      const resJSON = await response.json();
      console.log(resJSON); // Handle the response data as needed
      console.log(resJSON.data.token);
      setShortened(`https://tinee-url.vercel.app//${resJSON.data.token}`);
      setUrl("");
    } else {
      // Request failed
      console.log("Request failed");
    }
  };

  const handleReset = () => {
    setUrl("");
    setShortened("");
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h3> TINEE URL </h3>
        <div className={styles.featlist}>
          <ul>
            <li>
              <a href="#" className={styles.signup}>
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className={styles.signin}>
                Sign In
              </a>
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
        {shortened ? (
          <section className={styles.hero}>
            <h1>Shorten your URLs and share them easily!</h1>
            <br />
            <h3>
              Your shortened URL is{" "}
              <span>
                {" "}
                <a href={shortened} target="_blank">
                  {shortened}{" "}
                </a>
              </span>
            </h3>
            <br />
            <button
              className={styles.button}
              onClick={handleReset}
              type="button"
            >
              Shorten another
            </button>
          </section>
        ) : (
          <section className={styles.hero}>
            <h1>Shorten your URLs and share them easily!</h1>
            <br />
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                required
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
        )}
      </main>
    </div>
  );
}
