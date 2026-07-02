import React from 'react'
import styled from 'styled-components'
import School from './School'

const Education = () => {
       const Section = styled.div`
    border-bottom: 1px solid var(--p5);
    padding-bottom: 20px;
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
      <Container id="education">
        // education
        <span style={{color: 'white', fontSize:'18px'}}>Where I've studied</span>
        
        <School school="Northwestern University" degree="B.S. in Computer Science (McCormick) · B.A. Economics (Weinberg)" description="Double degree across engineering and liberal arts. Coursework in machine learning, systems programming, and engineering analysis. Project Lead for Outreach at Society of Women Engineers.
" tags={["CS211 Systems Programming", "CS349 ML", "CS214 Data Structures & Algorithms", "SWE", "DISC"]} years="2025 - 2029" underline={false} location="Evanston, IL" inProgress={true}></School>
      </Container>
    </Section>
  )
}

export default Education