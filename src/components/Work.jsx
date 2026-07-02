import React from 'react'
import styled from 'styled-components'
import ProjectTag from './ProjectTag'

const Work = ({company, role, description, tags, monthDate, underline}) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: ${underline ? '1px solid var(--p5)' : 'none'};

    `
    const EmployerContainer = styled.div`
        display: flex;
        flex-direction: column;
        font-weight: bold;
        width: 75%;
    `
    const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
  `
  return (
    <Container>
        <h4 style={{width: '10%', marginTop: '0'}}>{monthDate}</h4>
        <EmployerContainer>
            <span style={{color: 'white', fontSize:'14px'}}>{company}</span>
            
            <span style={{color: 'var(--p3)', fontSize: '12px'}}>{role}</span>
            
            <span style={{fontSize: '11px', color: 'var(--p2)'}}>{description}</span>
            <TagContainer>
                {tags.map((t) => {
                return <ProjectTag tag={t}></ProjectTag>
            })}
            </TagContainer>
            

        </EmployerContainer>
    </Container>
  )
}

export default Work