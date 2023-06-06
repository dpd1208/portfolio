import styled from 'styled-components';

const SectionWrapper = styled.div `
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 80vh;
  overflow: hidden;
  background-color: #fff5d7;
  align-items: center;
  justify-content: center;
  fonst-size: 16px;
  padding: 24px;

  .skill-focused {
    font-size: 36px;
}


@media (min-width: 768px) {
  justify-content: space-between;
}
  `;

const AboutHeader = styled.div `
  font-size: 42px;
  color: black;
  font-family: 'Abril Fatface', cursive;
  
  @media (min-width: 768px) {
    margin-left: 6%;
    font-size: 60px;
  }
  `;

const AboutBody = styled.div `
  font-size: 18px;
  color: black;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-bottom: 72px;
  align-self: self-start;

  @media (min-width: 768px) {
    margin-left: 6%;
    font-size: 30px;
    margin-bottom: 0px;
  }
  `;

  const PhotoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    align-self: self-start;

    @media (min-width: 768px) {
      padding: 100px;
    }
;`

const ProfilePhoto = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  width: 200px;
  margin-left: 6px;
  border-radius: 50%;
  `;

  const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: end;
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 72vh;

  @media (min-width: 768px) {
    padding: 100px;
    left: 0;
    top: 54vh;
  }
`;

  const StyledButton = styled.a `
  width: 240px;
  margin: 12px;
  display: inline-block;
  font-size: 12px;
  font-family: 'Quicksand', sans-serif !important;
  background-color: #20b2aa;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: black;            
    display: block;
    font-weight: 600;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    text-decoration: none;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    background-color: #EEE11B;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
 
  border-radius: 3px;
`;

export {
  SectionWrapper,
  AboutHeader,
  AboutBody,
  PhotoWrapper,
  ProfilePhoto,
  ButtonContainer,
  StyledButton,
};