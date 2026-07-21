import React from 'react'
import styled from 'styled-components'
import SkillsTag from './SkillsTag'

const Skills = () => {
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
    const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    flex-wrap: wrap;
  `
  const languages = ["JavaScript", "Python", "Java", "SQL", "C++", "C", "Swift", "Go", "MATLAB", "HTML", "CSS", "Racket"];
  const tools = ["React.js", "MongoDB", "Git", "Supabase", "Firebase", "AWS", "SONiC", "Figma", "Blender", "CAD"];
  return (
    <Section>
      <Container>
        // skills
        <span style={{color: 'white', fontSize:'18px'}}>What I work with</span>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <span style={{fontSize: '10px', color: 'var(--p3)'}}>LANGUAGES</span>
            <hr style={{width: '100%', borderTop: '1px solid var(--p6)', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', margin: '0 10px'}}/>
        </div>
        <TagContainer>
            {languages.map((l, index) => {
                return <SkillsTag tag={l} purple={true} key={index}></SkillsTag>
            })}
        </TagContainer>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <span style={{fontSize: '10px', color: 'var(--p3)', whiteSpace: 'nowrap'}}>TOOLS & FRAMEWORKS</span>
            <hr style={{width: '100%', borderTop: '1px solid var(--p6)', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', margin: '0 10px'}}/>
        </div>
        <TagContainer>
            {tools.map((l, index) => {
                return <SkillsTag tag={l} purple={false} key={index}></SkillsTag>
            })}
        </TagContainer>
        
        
      </Container>
    </Section>
  
  )
}

export default Skills