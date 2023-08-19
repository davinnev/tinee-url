import { FormEventHandler, useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // Perform any client-side validation here

    // Create a new user with the provided username and password
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            type: "SignUp",
          }),
        }
      );

      console.log(response);
      if (response.status === 200) {
        // User registration successful
        // Redirect or show a success message
        console.log("SignUp successful");
        window.location.href = "/auth/signin";
      } else {
        console.log("Signup not successful");
      }
    } catch (error) {
      // Handle any network or server errors
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
            Sign Up
          </h2>
          <form onSubmit={handleSignUp}>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
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
            fontFamily: "Helvetica",
          }}
        >
          Already have an account?{" "}
          <a href="/auth/signin" style={{ color: "#273043" }}>
            Login
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
    </div>
  );
}

export default SignUp;
