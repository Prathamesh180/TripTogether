import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from "react-router-dom";


//import HeroSection from "./HeroSection";
import ContactPage from "./ContactPage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";


export default function RouterPage() {
 return (
    <div>
      

      <Router>
        <Routes>
          {/* //<Route path="/" exact element={<HeroSection />} /> */}
          
          <Route path="/Contact" exact element={<ContactPage />} />

          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/login" exact element={<LoginPage />} />

         
          
          
          

        </Routes>
      </Router>
    </div>
  );
}
