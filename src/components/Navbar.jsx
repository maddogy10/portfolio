import React from 'react'
import styled from 'styled-components'
import NavCategory from './NavCategory'

const StyledNavbar = styled.nav`
  color: var(--lightFont);
  padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
`;
const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
`;
const NavName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavName><span style={{color: '#fff'}}>Madeleine</span>.Young</NavName>
      <NavbarLinks>
      <NavCategory title="about" /> 
      <NavCategory title="education" />
      <NavCategory title="experience" />
      <NavCategory title="projects" />
      <NavCategory title="skills" />
      <NavCategory title="contact" />
      </NavbarLinks>
    </StyledNavbar>
  )
}

export default Navbar