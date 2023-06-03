//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Weather from './components/Weather';
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
    <ServicesSection/>
    <Weather/>
    <ContactSection />
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
