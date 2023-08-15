import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Perform any client-side validation here

    // Create a new user with the provided username and password
    try {
      const formData = {
        username: username,
        password: password,
        type: "SignUp",
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // User registration successful
        // Redirect or show a success message
        console.log("SignUp successful");
        window.location.href = "/signin";
      } else {
        console.log("Signup not successful");
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
