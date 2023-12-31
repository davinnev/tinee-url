import styles from "../styles/Home.module.css";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [shortened, setShortened] = useState("");
  const { status, data, ...session } = useSession();
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      if (session) {
        setUser(session.user);
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = `${process.env.NEXT_PUBLIC_HOST}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create an object with the form data

    const formData = {
      url: url,
      customHash: custom,
      username: user?.name || "",
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
    const res = await response.json();

    // Handle the response
    setUrl("");
    setCustom("");
    if (response.ok) {
      // Request was successful
      console.log(res.data.token);
      setShortened(`https://tinee.vercel.app/${res.data.token}`);
    } else if (res.message === "Token taken.") {
      window.location.href = "/";
      alert("Token already in use");
    } else {
      // Request failed
      console.log("Request failed");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setUrl("");
    setCustom("");
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
                <a href="/profile" className={styles.signup}>
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
                <a href="/signup" className={styles.signup}>
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
              <div className={styles.inputContainer}>
                <input
                  required
                  className={styles.inputbox}
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Original URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <input
                  className={styles.inputbox}
                  type="text"
                  id="fname2"
                  name="fname2"
                  placeholder="Custom token (leave empty to randomize)"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                />
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Shorten URL!"}
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
