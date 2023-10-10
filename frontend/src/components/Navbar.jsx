import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
background-color: rgb(224, 222, 182);

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 2rem;
 
  
`;

// const Logo = styled.a`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #333;
// `;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1.9rem;
`;

const NavLink = styled.a`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  &:hover {
    color: white;
    
  }
`;
const Logo = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.8rem;
  color: #333;
`;

// const LogoImage = styled.img`
//   width: 40px;
//   height: 40px;
//   margin-right: 0.5rem;
// `;

export default function Navbar() {
  return (
    <Nav>
    <Logo>
      {/* <LogoImage src="../../public/images/TRIPT.png" alt="" /> */}
      
      <p>
      <span style={{ color: 'Orange' }}>Trip</span>
      <span style={{ color: 'golden' }}>Together</span>
    </p>
    
      
    </Logo>      
    <NavLinks>
        <NavItem>
          <NavLink href="/HomePage">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/AboutPage">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/FormTrip">Location</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink href="/ContactPage">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/SignupPage">Join</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/LoginPage">Login</NavLink>
        </NavItem>
        
      </NavLinks>
    </Nav>
  );
}

//export default Navbar;
