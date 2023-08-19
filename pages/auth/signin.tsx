import { FormEventHandler, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import logo from "../../public/tinee-logo.png";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(true);
  const session = useSession();

  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    console.log("Result: ", result);
    if (!result.ok) {
      // Sign-in failed
      console.log("fAILED");
      setSuccessful(false);
      console.error(result.error);
    } else {
      // Sign-in successful
      // Redirect or handle success as needed
      console.log("Login successful");
      console.log(session);
      window.location.href = "/";
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "50px",
        height: "100vh",
        fontFamily:
          "font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "#273043",
            borderRadius: "10px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "80%",
            paddingLeft: "50px",
            paddingTop: "30px",
            paddingBottom: "55px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "30px",
              color: "#fff",
              fontFamily: "Helvetica",
              maxWidth: "80%",
            }}
          >
            Login
          </h2>
          <form onSubmit={handleSignIn}>
            <input
              required
              style={{
                height: "40px",
                fontSize: "16px",
                marginBottom: "30px",
                paddingLeft: "15px",
                backgroundColor: "#fff",
                color: "#273043",
                borderRadius: "15px",
                borderColor: "#fff",
                width: "80%",
              }}
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              style={{
                width: "80%",
                height: "40px",
                fontSize: "16px",
                marginBottom: "30px",
                paddingLeft: "15px",
                backgroundColor: "#fff",
                color: "#273043",
                borderRadius: "15px",
                borderColor: "#fff",
              }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "#fff",
                color: "#273043",
                borderRadius: "15px",
                textDecoration: "none",
                height: "40px",
                width: "30%",
                textAlign: "center",
                verticalAlign: "center",
                fontSize: "15px",
                cursor: "pointer",
                borderColor: "#fff",
              }}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {successful ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Helvetica",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#273043",
            }}
          >
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "#273043" }}>
              Sign up
            </a>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#273043",
            }}
          >
            Stay guest mode and return{" "}
            <a href="/" style={{ color: "#273043" }}>
              home
            </a>
          </p>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Helvetica",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#ed2939",
            }}
          >
            Wrong username/password!
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#273043",
            }}
          >
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "#273043" }}>
              Sign up
            </a>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#273043",
            }}
          >
            Stay guest mode and return{" "}
            <a href="/" style={{ color: "#273043" }}>
              home
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default SignIn;
