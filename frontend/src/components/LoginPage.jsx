import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/LoginPage.css"; // Import the CSS file for styling

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with the collected credentials
    // For simplicity, let's assume login is successful if both fields are filled
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="container" id="/login">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      <CSSTransition
        in={loggedIn}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <p className="success-message">Login successful!</p>
      </CSSTransition>
    </div>
  );
}

//export default LoginPage;
