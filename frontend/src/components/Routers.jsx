import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";


export default function RouterPage() {
 return (
    <div>
      

      <Router>
        <Routes>
          <Route path="/AboutPage" exact element={<AboutPage />} />

          <Route path="/HomePage" exact element={<HomePage />} />
          
          <Route path="/ContactPage" exact element={<ContactPage />} />

          <Route path="/SignupPage" exact element={<SignupPage />} />
          <Route path="/LoginPage" exact element={<LoginPage />} />

         
          
          
          

        </Routes>
      </Router>
    </div>
  );
}
