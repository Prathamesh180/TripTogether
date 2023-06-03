import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Hero = styled(animated.section)`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled(animated.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`;

const HeroSubheading = styled(animated.p)`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 4rem;
  text-align: center;
  color: #666;
`;

const HeroButton = styled(animated.button)`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
  border-radius: 3rem;
  background-color: #7f58af;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const HeroSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <Hero style={props}>
      <HeroHeading className="hero-heading">
        Plan here...!
      </HeroHeading>
      <HeroSubheading className="hero-subheading">
      Your one-stop destination for all things...!
      </HeroSubheading>
      <HeroButton className="hero-button">Join Trip</HeroButton>
    </Hero>
  );
};

export default HeroSection;
