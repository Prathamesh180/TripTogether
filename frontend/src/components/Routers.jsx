// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //import { Link } from "react-router-dom";



// import AboutPage from "./AboutPage"
// import HomePage from "./HomePage";
// import ContactPage from "./ContactPage";
// import SignupPage from "./SignupPage";
// import LoginPage from "./LoginPage";


// export default function RouterPage() {
  
  
//  return (
//     <div>
      

//       <Router>
//         <Routes>
//           <Route path="/AboutPage" exact element={<AboutPage />} />

//           <Route path="/HomePage" exact element={<HomePage />} />
          
//           <Route path="/ContactPage" exact element={<ContactPage />} />

//           <Route path="/SignupPage" exact element={<SignupPage />} />
//           <Route path="/LoginPage" exact element={<LoginPage />} />
//           </Routes>
//       </Router>
//     </div>
//   );
// }

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "../styles/SignupPage.css"; // Import the CSS file for styling
import JoinUs from "./JoinUs";
import MakeMyTrip from "./MakeMyTrip";
import FormTrip from "./FormTrip";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/JoinUs" element={<JoinUs />} />

        <Route path="/MakeMyTrip" element={<MakeMyTrip />} />

          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/FormTrip" element={<FormTrip />} />

          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Registration successful
        setSuccessMessage("Signup successful!");
        // Reset form inputs
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        // Redirect to the login page
        navigate("/LoginPage");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container" id="/signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
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
        <button type="submit">Signup</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
