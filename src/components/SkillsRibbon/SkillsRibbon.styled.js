import styled, {
  keyframes
} from 'styled-components';

const pan = keyframes `
0% {
    transform: translateX(0);
    }
    
  100% {
    transform: translateX(-3300px);
    }
`;

const SectionWrapper = styled.div `
    width: 100%;
    height: 10vh;
    position: absolute;
    top: 90vh;
    overflow: hidden;
    background-color: ${props => props.theme.colors.ui.bodyBackground};
    z-index: 1;

    .list, .list-bis {
        width: 6000px;
        position: absolute;
        white-space: nowrap;
        display: inline-block;
        animation-name: ${pan};
        animation-duration: 16s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      
      .list-bis {
        left: 3300px;
      }
`;

const ListWrapper = styled.div `
    width: 3700px;
`;

const Card = styled.div `
    height: 60px;
    line-height: 60px;
    width: 300px;
    display: inline-block;
    margin-left: 30px;
    float: left;
    overflow: hidden;
    text-align: center;
    color: ${props => props.theme.name === 'coral' ? props.theme.colors.text.default : '#ff3b3b'};
    background-color: transparent;
    font-weight: 600;
    font-size: 18px;
    font-family: ${props => props.theme.fonts.secondaryFont};
`;

export {
  SectionWrapper,
  ListWrapper,
  Card,
};