import React from 'react'
import styled from 'styled-components'

const About = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        border-bottom: solid 1px var(--p6);
    `
    const SkillsContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        border-right: solid 1px var(--p6);
        box-sizing: border-box;
        padding-bottom: 2rem;
    `
    const SkillsText = styled.div`
        color: var(--p4);
        margin: 2rem 0 0 4rem;
        text-align: left;
        font-size: 12px;
        font-weight: bold;
    `
    const Terminal = styled.div`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid var(--p5);
        margin: 1rem 0 0 2rem;
        width: 90%;
    `
    const TerminalTop = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--p6);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-left: 15px;
        color: var(--p2);
        padding-top: 3px;
        padding-bottom: 3px; 
         `
    const Circle = styled.div`
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #F09595;
        margin: 2px;
    `
    const TerminalBottom = styled.div`
        font-weight: bold;
        text-align: left;
        width: 90%;
        padding: 1rem 1.2rem;
        color: var(--p3);
        font-size: 15px;
        box-sizing: border-box;
        
    `
    const AboutContainer = styled.div`
        width: 50%;
        color: var(--p2);
        font-weight: bold;
        font-size: 15px;
    `
  return (
    <Container id="about">
        <SkillsContainer>
            <SkillsText>
                // about
                <br />
                <span style={{color: 'white', fontSize: '18px'}}>Building things that matter</span>
            </SkillsText>
            <Terminal>
                <TerminalTop>
                    <Circle></Circle>
                    <Circle style={{backgroundColor: '#EF9F27'}}></Circle>
                    <Circle style={{backgroundColor: '#5DCAA5'}}></Circle>
                    <div style={{fontSize: '12px', marginLeft: '15px'}}>terminal</div>
                </TerminalTop>
                <TerminalBottom>
                    $ <span style={{color: 'var(--p2)'}}>who am i</span>
                    <br />
                    <span style={{color: '#9FE1CB'}}>&gt; madeleine_young</span>
                    <br />
                    $ <span style={{color: 'var(--p2)'}}>cat skills.txt</span>
                    <br />
                    <span style={{color: '#9FE1CB'}}>&gt;</span> <span style={{color: '#FAC775'}}> react, typescript, <br /> &nbsp;&nbsp;python, AWS, SQL</span>
                    <br />
                    $ <span style={{color: 'var(--p2)'}}>echo $STATUS</span>
                    <br />
                    <span style={{color: '#9FE1CB'}}>&gt; shipping & learning</span>
                    <br />
                    $
                    
                </TerminalBottom>
            </Terminal>
        </SkillsContainer>
        <AboutContainer>
            <p style={{padding: '5%', textAlign:'left', width: '90%'}}>I'm a CS student at Northwestern building real-world full-stack systems — from volunteer portals to ML pipelines.
            <br /><br />I care about clean code, thoughtful UI, and software that actually ships. <br />Currently interning at Liberty Mutual on global network communications.
            <br /><br />When I'm not coding, I'm exploring expressive web design, machine <br />learning, and systems that scale.</p>
                        
        </AboutContainer>
    </Container>
  )
}

export default About