import React from 'react'
import styled from 'styled-components'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
const Footer = () => {
    const Container = styled.div`
    text-align: left;
    color: var(--p3);
    font-size: 12px;
    padding: 2rem 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg3);
    `
    const Info = styled.div`
        display: flex;
        flex-direction: column;
    `
    const Copyright = styled.div`
        color: var(--p4);
        font-weight: bold;
    `
    
  return (
    <Container id="contact">
        <Info>
        <div>let's build something –&nbsp;<span style={{color: 'white'}}> madeleinexyoung@gmail.com</span></div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <a href="https://github.com/maddogy10" target="_blank" rel="noopener noreferrer">
            <img src={github}  alt="" style={{width: '30px', marginRight: '10px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/madeleineyoung10" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}  alt="" style={{width: '30px'}}/>
        </a>
        </div> 
        </Info>
        <Copyright>
            © 2026 Madeleine Young. all rights reserved.
        </Copyright>
        </Container>
  )
}

export default Footer