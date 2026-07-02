import React from 'react'
import styled from 'styled-components'
const ProjectTag = ({tag}) => {
    const Container = styled.div`
        border-radius: 15px;
        border: 1px solid var(--p5);
        background-color: var(--bg);
        padding: 0 15px;
        margin-right: 10px;
    `
  return (
    <Container>{tag}</Container>
  )
}

export default ProjectTag