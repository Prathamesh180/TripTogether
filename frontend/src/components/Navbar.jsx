import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
background-color: rgb(224, 222, 182);

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #555;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo href="#"> tripTogether</Logo>
      <NavLinks>
        <NavItem>
          <NavLink href="/HomePage">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/AboutPage">About</NavLink>
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
