import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid black;
    box-sizing: border-box; */
    `

const SingleSkillContainer = styled.div`
    display: flex;
    justify-content: space-around;
    /* border: 1px solid red;
    box-sizing: border-box; */
    `

const SkillPart = styled.div`
    width: 50%;
    text-align: left;
    /* border: 1px solid green;
    box-sizing: border-box; */
    `

export default props => (
    <SkillsContainer>
        <SingleSkillContainer>
            <SkillPart>PhotoShop</SkillPart>
            <SkillPart>●●●●●●○○○○</SkillPart>
        </SingleSkillContainer>
        <SingleSkillContainer>
            <SkillPart>Indesign</SkillPart>
            <SkillPart>●●●●●●●●○○</SkillPart>
        </SingleSkillContainer>
        <SingleSkillContainer>
            <SkillPart>Illustrator</SkillPart>
            <SkillPart>●●●●○○○○○○</SkillPart>
        </SingleSkillContainer>
        <SingleSkillContainer>
            <SkillPart>CorelDraw</SkillPart>
            <SkillPart>●●●●●●●●●○</SkillPart>
        </SingleSkillContainer>
    </SkillsContainer>
)