import React from 'react'
import styled from 'styled-components'
const SkillsTag = ({tag, purple}) => {
    const Container = styled.div`
        border-radius: 15px;
        border: 1px solid ${purple ? '#3C3489' : '#085041'};
        background-color: ${purple ? '#1c1535' : '#0d1f18'};
        padding: 0 15px;
        margin-right: 10px;
        margin: 5px 10px 5px 0;
        color: ${purple ? '#AFA9EC' : '#9FE1CB'}

    `
  return (
    <Container>{tag}</Container>
  )
}

export default SkillsTag