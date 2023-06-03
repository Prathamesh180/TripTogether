//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
     <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" /> */}
        
        
        
        
    <>
    <Navbar />
    
    <HeroSection />
    <AboutSection />
    
    
    <ContactPage />
    <br></br>
    <LoginPage/>
    <SignupPage/>
    <Footer />
    </>
    {/* //   </header> */}
     </div>
  );
}

export default App;
