import styles from "../styles/Home.module.css";
import { FormEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");
  const { status, ...session } = useSession();

  console.log(session, status);

  const handleSignOut = async () => {
    await signOut();
    console.log(session, status);
  };

  const handleSubmit = async (e: FormEvent) => {
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
        {status === "authenticated" ? (
          <div className={styles.featlist}>
            <ul>
              <li>
                <a href="/" className={styles.signup}>
                  Profile
                </a>
              </li>
              <li>
                <a className={styles.signin} onClick={handleSignOut}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.featlist}>
            <ul>
              <li>
                <a href="/auth/signup" className={styles.signup}>
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/auth/signin" className={styles.signin}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
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
              <button className={styles.button} type="submit">
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
