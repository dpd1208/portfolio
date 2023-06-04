import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 84vh;
  overflow: hidden;
  background-color: gray;
  align-content: space-evenly;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}
  `;

  const NameSection = styled.div `
  font-size: 60px;
  color: white;
  `;

  const Name = styled.div `
  position: relative;
  text-align: center;
  width: 100%;
  `;


export {
    SectionWrapper,
  NameSection,
  Name,
};