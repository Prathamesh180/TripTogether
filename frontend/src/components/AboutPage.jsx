import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';


const About = styled.section`
  margin: auto;
  padding: 5.4rem;
  height: 60vh;
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

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  background-color: #ccc;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default function AboutSection() {
  return (
    <About id="/about">
      <Heading>About Us</Heading>
      <AboutText>
        TripTogether is a team forming website to find like-minded and exciting people to add fun to your weekend journey.
      </AboutText>
      <SocialMediaWrapper>
        <SocialMediaIcon href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.twitter.com/" target="_blank">
          <i className="fab fa-twitter"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.linkedin.com/in/kirankp25/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </SocialMediaIcon>
      </SocialMediaWrapper>
    </About>
  );
}
