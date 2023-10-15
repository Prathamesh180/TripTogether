import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import './Home.css';

const Hero = styled(animated.section)`
 background-image: url("./images/baba2.jpeg");
background-repeat: no-repeat;
background-size: cover;
  background-color: #f8f8f8;
  height: 90.5vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const HeroHeading = styled(animated.h1)`
  font-size: 4rem;
  padding-top:120px;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #777;
`;

const HeroSubheading = styled(animated.p)`
  font-size: 2rem;
 padding-top:50px;
  padding-left:5px;
  font-weight: 400;
  margin-bottom: 4rem;
  text-align: center;
  color: #999;
`;

const HeroButton1 = styled(animated.button)`
  @media only screen and (max-width: 440px) {
    display: flex;
    background-color:rgb(224, 222, 182);
    text-align: center;
  }
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  padding: none;
  border-radius: 1rem;
  
 
  border: none;
  cursor: pointer;
  margin-left: 130px;
  margin-right:10px;
  margin-top:10px;
  text-decoration:none;
`;

const HeroButton2 = styled(animated.button)`
  @media only screen and (max-width: 440px) {
    display: flex;
    background-color:rgb(224, 222, 182);
    text-align: center;
  }
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  padding: none;
  border-radius: 1rem;
  
 
  border: none;
  cursor: pointer;
  margin-left: 20px;
  margin-right:10px;
  margin-top:10px;
  text-decoration:none;
`;




export default function HomePage() {
  const props = useSpring({
    // from: { opacity: 0, transform: 'translateY(0)' },
    // to: { opacity: 1, transform: 'translateY(0)' },
    // config: { duration: 10 },
  });
  

  return (
    <Hero style={props}>
      <HeroHeading className="hero-heading">
      {/* 👋 */}
       Hey Buddy...!
      </HeroHeading>
      <HeroSubheading className="hero-subheading">
      Search your companion here
      </HeroSubheading>
      <div class="btn">
      {/* <HeroButton className="hero-button">
        <a href="/JoinUs">
          <span style={{ color: 'violet' }}>
          
            Join Trip
          </span>
        </a>
      </HeroButton>
      <HeroButton className="hero-button">
        <a href="/MakeMyTrip">
          <span style={{ color: 'violet' }}>
            Form Trip
          </span>
        </a>
      </HeroButton> */}
      <tr>
        <td>
        <HeroButton1 className="hero-button ">
        <a href="/JoinUs">
          <span style={{ color: 'black' }}>
          
            Join Trip
          </span>
        </a>
      </HeroButton1>
        </td>
        
        <td>
        <HeroButton2 className="hero-button ">
        <a href="/MakeMyTrip">
          <span style={{ color: 'black' }}>
            Form Trip
          </span>
        </a>
      </HeroButton2>
        </td>
        <td><img src="" alt="" /></td>
      </tr>
      </div>
    </Hero>
  );
};

