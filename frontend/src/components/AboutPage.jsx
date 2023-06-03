import React from 'react';
import styled from 'styled-components';

const About = styled.section`
  margine:auto;
  padding: 5.4rem;
  height:60vh;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  margin: auto;
  width: 60%;
`;

export default function AboutSection() {
  return (
    <About id="/about">
      <Heading>About</Heading>
      <AboutText>
      TripTogether is an team forming website to form a team to go for weekend
      with like minded and exciting people to add fun to your journey.
      </AboutText>
    </About>
  );
}

//export default AboutSection;
