import styled from "styled-components";


const theme = {
  green: {
    color: "#c6e1d5",
  },
  tan: {
    color: "#BEB0A7",
  },
  blue: {
    color: "#83B5D1",
  }

}
const RoundScreen = styled.p`
    background-color: white;
    border-radius: 10px;
    text-align: center;
    color: black;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
`;

const PeriodDisplay = styled.div`
    background-color: ${props => theme[props.theme].color};;
    text-align: center;
    color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    transition: all 0.4s ease;
`;


PeriodDisplay.defaultProps = {
  theme: 'green'
}


const DisplayRound= ({rounds, period, theme}) => {
  
    return <RoundScreen>Round: {rounds} <br></br> <PeriodDisplay theme = {theme}>{period}</PeriodDisplay></RoundScreen>;
  };

export default DisplayRound;