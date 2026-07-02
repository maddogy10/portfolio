import React from 'react'
import styled from 'styled-components'

const StatsBanner = () => {
    const StatsContainer = styled.div`
        width: 100%;
        background-color: var(--bg2);
        color: var(--p4);
        display: flex;
        flex-direction: row;
        border-top: 1px solid var(--p6);
        border-bottom: 1px solid var(--p6);
    `
    const StatsSection = styled.div`
        width: 25%;
        text-align: left;
        padding: 1rem;
        font-size: 12px;
        border-right: 1px solid var(--p6);
    `
  return (
    <StatsContainer>
        <StatsSection>
            <span style={{color: 'var(--p3)', fontSize: '24px'}}>5<br></br></span>
            projects shipped
        </StatsSection>
        <StatsSection><span style={{color: 'var(--p3)', fontSize: '24px'}}>6+<br></br></span>years building</StatsSection>
        <StatsSection><span style={{color: 'var(--p3)', fontSize: '24px'}}>2<br></br></span>internships</StatsSection>
        <StatsSection><span style={{color: 'var(--p3)', fontSize: '24px'}}>∞<br></br></span>bugs squashed</StatsSection>
    </StatsContainer>
  )
}

export default StatsBanner