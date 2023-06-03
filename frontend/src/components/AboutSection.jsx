import React from 'react';
import styled from 'styled-components';

const About = styled.section`
  padding: 5rem 2rem;
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
`;

function AboutSection() {
  return (
    <About id="about">
      <Heading>About Me</Heading>
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod augue vitae leo
        consequat consequat. Aliquam erat volutpat. Sed gravida sem in est maximus, ac commodo
        libero euismod.
      </AboutText>
    </About>
  );
}

export default AboutSection;
