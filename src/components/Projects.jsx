import React from 'react'
import styled from 'styled-components'
import Project from '../components/Project'

const Projects = () => {
    const Section = styled.div`
        border-bottom: solid 1px var(--p5);
        padding-bottom: 2rem;
    `
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
    <Container id="projects">
        // projects
        <span style={{color: 'white', fontSize:'18px'}}>What I've built</span>
        <Project title={<>WildMarket   <span style={{color: '#5DCAA5', border: '1px solid #1D9E75', borderRadius: '10px', padding: '0 10px'}}>in progress</span></>} description="A peer-to-peer marketplace application where users can create listings, discover items, and manage their profiles. Features include user authentication, listing management, image uploads, and a responsive interface powered by a full-stack architecture." tags={["React.js", "AWS RDS", "Firebase", "MySQL"]} link={"https://wildmarket-b9031.web.app/"}></Project>
        <Project title="CW Market Volunteer Portal" description="Full-stack volunteer management system with role-based auth, scheduling, and AWS-hosted infrastructure. Used by 20+ volunteers." tags={["React", "Firebase", "AWS", "RDS"]} link="https://github.com/CWMF-admin/js-frontend"></Project>
        <Project title="SociaLink" description=" A React.js and Supabase web app for managing saved connections with real-time state synchronization." tags={["React", "Supabase", "CSS"]} link="https://github.com/maddogy10/SociaLink"></Project>
        <Project title="FlashQuiz" description="A flashcard-based quiz app for creating and studying custom question sets." tags={["JavaScript", "HTML", "CSS"]} link="https://github.com/maddogy10/FlashQuizer"></Project>
    </Container>
    </Section>
  )
}

export default Projects