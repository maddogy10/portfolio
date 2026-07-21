import React from 'react'
import styled from 'styled-components'
import ProjectTag from './ProjectTag'

const School = ({school, degree, description, tags, years, underline, location, inProgress}) => {
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
        <div style={{width: '10%', margin: '0'}}>
            <h4 style={{margin: '0'}}>{years}</h4>
            <h4 style={{margin: '0'}}>{location}</h4>
        </div>
        
        <EmployerContainer>
            <span style={{color: 'white', fontSize:'14px'}}>{school} {inProgress ? <span style={{color: '#5DCAA5', border: '1px solid #1D9E75', borderRadius: '10px', padding: '0 10px'}}>in progress</span> : ''}</span>
            
            <span style={{color: 'var(--p3)', fontSize: '12px'}}>{degree}</span>
            
            <span style={{fontSize: '11px', color: 'var(--p2)'}}>{description}</span>
            <TagContainer>
                {tags.map((t, index) => {
                return <ProjectTag tag={t} key={index}></ProjectTag>
            })}
            </TagContainer>
            

        </EmployerContainer>
    </Container>
  )
}

export default School