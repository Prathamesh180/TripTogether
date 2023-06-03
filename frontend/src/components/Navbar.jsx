import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
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

function Navbar() {
  return (
    <Nav>
      <Logo href="#"> tripTogether</Logo>
      <NavLinks>
        <NavItem>
          <NavLink href="#post">Post</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#signup">Join</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#login">Login</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href="#weather">Weather</NavLink>
        </NavItem> */}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
