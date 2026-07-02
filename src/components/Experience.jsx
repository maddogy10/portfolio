import React from 'react'
import styled from 'styled-components'
import Work from './Work'
const Experience = () => {
    const Section = styled.div`
    border-bottom: 1px solid var(--p5);`
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 11px;
    color: var(--p4);
    font-weight: bold;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 4rem);
    `
  return (
    <Section>

    <Container id="experience">
        // experience
        <span style={{color: 'white', fontSize:'18px'}}>Where I've worked</span>
       <Work company="Liberty Mutual" role="TechStart Intern" description="Building network communications tools on the Global Network Communications team.
" tags={["Full-Stack", "Networking", "Go", "SONiC"]} monthDate="Summer 2026" underline={true}></Work>
        <Work company="Northwestern DISC" role="Full-Stack Engineer" description="Built the CW Market Volunteer Portal end-to-end — React frontend, Firebase auth, AWS + RDS backend. Six-month role.
" tags={["React", "Firebase", "AWS", "RDS"]} monthDate="Spring 2026" underline={true}></Work>
       <Work company="The Outfit, Inc." role="Software Development Intern" description="Worked with a 4-person dev team building JavaScript enhancements for client applications and improved FlashQuiz usability through debugging and iterative testing."
 tags={["JavaScript", "HTML", "CSS"]} monthDate="Fall 2025" underline={false}></Work>

       </Container>
       </Section>
  )
}

export default Experience