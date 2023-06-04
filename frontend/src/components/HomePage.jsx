import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Hero = styled(animated.section)`
 background-image: url("./images/b3.jpg");
background-repeat: no-repeat;
background-size: cover;
  background-color: #f8f8f8;
  height: 85.4vh;
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
  @media only screen and (max-width: 440px) {
    display: flex;
    text-align: center;
  }
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem 2rem;
  border-radius: 3rem;
  
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 20px;
`;

export default function HeroSection() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 600 },
  });

  return (
    <Hero style={props}>
      <HeroHeading className="hero-heading">
        Hey Buddy...!
      </HeroHeading>
      <HeroSubheading className="hero-subheading">
      Search your companion here...!
      </HeroSubheading>
      <div>
      <HeroButton className="hero-button"><a href="/JoinUs">Join Trip</a></HeroButton>
      <HeroButton className="hero-button"><a href="/MakeMyTrip"><strong>Form Trip</strong></a></HeroButton>
      </div>
    </Hero>
  );
};

//export default HeroSection;

// import React from 'react';
// import styled from 'styled-components';
// import { useSpring, animated } from 'react-spring';

// const Hero = styled(animated.section)`
//   background-image: url("");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-color: #f8f8f8;
//   height: 85.4vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const HeroHeading = styled(animated.h1)`
//   font-size: 4rem;
//   font-weight: 700;
//   margin-bottom: 2rem;
//   text-align: center;
//   color: #333;
// `;

// const HeroSubheading = styled(animated.p)`
//   font-size: 2rem;
//   font-weight: 400;
//   margin-bottom: 4rem;
//   text-align: center;
//   color: #666;
// `;

// const HeroButton = styled(animated.button)`
//   @media only screen and (max-width: 440px) {
//     display: flex;
//     text-align: center;
//   }
//   font-size: 1.5rem;
//   font-weight: 600;
//   padding: 1rem 2rem;
//   border-radius: 3rem;
//   background-color: rgb(236, 226, 80);
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   margin: 20px;
// `;

// const HeroSection = ({ title, description, buttons }) => {
//   const props = useSpring({
//     from: { opacity: 0, transform: 'translateY(-50px)' },
//     to: { opacity: 1, transform: 'translateY(0)' },
//     config: { duration: 1000 },
//   });

//   return (
//     <Hero style={props}>
//       <HeroHeading className="hero-heading">
//         Hey Buddy...
//       </HeroHeading>
//       <HeroSubheading className="hero-subheading">
//         Choose your campatible...!
//       </HeroSubheading>
//       <div>
//         {buttons.map((button, index) => (
//           <HeroButton key={index} className="hero-button" href={button.href}>{button.text}</HeroButton>
//         ))}
//       </div>
//     </Hero>
//   );
// };

// export default HeroSection;