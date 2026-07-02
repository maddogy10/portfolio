import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const Hero = () => {
    const [isHoveredGithub, setIsHoveredGithub] = useState(false);
    const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);

    const Hero = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--lightFont);`
    const HeroName = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    padding: 2rem;
    align-self: flex-start;
    color: #fff;
    `
    const HelloWorld = styled.div`
    font-size: 1rem;
    font-weight: bold;
    padding: 5rem 2rem 0 2rem;
    align-self: flex-start;
    color: var(--darkFont);
    `
    const HeroDescription = styled.div`
    font-size: 1rem;
    padding: 1rem 2rem;
    align-self: flex-start;
    width: 60%;
    text-align: left;
    line-height: 2;
    `;
    const HeroProjectsButton = styled.button`
    background: var(--purpleButton);
    color: #fff;
    border: none;
    padding: 1rem 1rem;
    margin-left: 2rem;
    align-self: flex-start;
    width: 150px;
    font-weight: bold;
    border-radius: 20px;
    height: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
     cursor: pointer;   
     font-family: var(--jetbrains); 
    `;
    const HeroContactButton = styled.button`
    background-color: var(--bg);
    border: 1px solid var(--purpleButton);
    color: var(--lightFont);
    padding: 1rem 1rem;
    margin-left: 2rem;
    align-self: flex-start;
    width: 150px;
    font-weight: bold;
    border-radius: 20px;
    height: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
     cursor: pointer;   
     font-family: var(--jetbrains); 
    `;
    const HeroButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    `;
    const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: spaced-evenly;
    margin-left: 2rem;
    font-size: 15px;
    
    `;
  return (
    <Hero>
        <HelloWorld>// hello world</HelloWorld>
        <HeroName>Madeleine Young</HeroName>
        <HeroDescription>
            Full-stack developer focused on building inclusive and engaging products, from polished user experiences to scalable backend systems.
        </HeroDescription>
        <HeroButtonContainer>
            <a href="#projects" style={{textDecoration: 'none'}}><HeroProjectsButton>view projects</HeroProjectsButton></a>
            <a href="#contact" style={{textDecoration: 'none'}}><HeroContactButton>get in touch</HeroContactButton></a>
        </HeroButtonContainer>
        <SocialLinks>
            <a href="https://github.com/maddogy10" target="_blank" rel="noopener noreferrer" style={{padding: '1rem 1rem 1rem 0rem', color: (isHoveredGithub ? '#fff' : 'var(--darkFont)'), textDecoration: 'none'}} onMouseEnter={() => setIsHoveredGithub(true)} onMouseLeave={() => setIsHoveredGithub(false)}>github</a>
            <a href="https://www.linkedin.com/in/madeleineyoung10" target="_blank" rel="noopener noreferrer"style={{padding: '1rem 1rem 1rem 1rem', color: (isHoveredLinkedin ? '#fff' :'var(--darkFont)'), textDecoration: 'none'}} onMouseEnter={() => setIsHoveredLinkedin(true)} onMouseLeave={() => setIsHoveredLinkedin(false)}>linkedin</a>
        </SocialLinks>
    </Hero>
  )
}

export default Hero