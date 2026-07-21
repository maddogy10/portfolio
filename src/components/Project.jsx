import React from 'react'
import styled from 'styled-components'
import ProjectTag from './ProjectTag'
const Project = ({ title, description, tags, link}) => {
  const Container = styled.div`
    width: 100%;
    margin: 10px 0;
    background-color: var(--bg2);
    color: var(--p2);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: solid 1px var(--p5);
    font-size: 11px;
    text-decoration: none;
    &:hover {
      border-color: var(--p3);
      background-color: var(--bg3);
    }
  `
  const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
  `
  const ProjectLink = styled.a`
    display: block;
    text-decoration: none;
    color: inherit;
    transition: filter 0.2s ease;

    &:hover {
      
      cursor: pointer;
    }
  `
  return (
    <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
    <Container>
      
      <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '14px'}}>{title}</h2>
      <p>{description}</p>
      <TagContainer>
        {tags.map((t, index) => {
          return <ProjectTag tag={t} key={index}></ProjectTag>
        })}
      </TagContainer>
      
    </Container>
    </ProjectLink>
  )
}

export default Project