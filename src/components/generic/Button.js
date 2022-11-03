import styled from "styled-components";

// reference for for theme toggle: https://www.youtube.com/watch?v=gP8nQVlrwc0&t=552s&ab_channel=react.school
const theme = {
  green: {
    default: "#2B7967",
    hover: "#378a77",
    color: "#ffffff",
  },
  white: {
    default: "#949494",
    color: "#ffffff",
    hover: "#858585",
  },
  blue: {
    default: "#3454D1",
    color: "#ffffff",
    hover: "#344db3",
  },
  darkblue: {
    default: "#0E34A0",
    color: "#ffffff",
    hover: "#0f2f87",
  }

}

const TimerButton = styled.button`
  cursor: pointer;
  color: ${props => theme[props.theme].color};
  width: 200px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => theme[props.theme].default};
  border:none;
  border-radius: 10px;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 90%;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
    color: ${props => theme[props.theme].color};
  }
  &:disabled {
    opacity: 20%;
    cursor: default;
  }
`;

TimerButton.defaultProps = {
  theme: 'green'
}


const Button= ({onClick, label, activeState, theme}) => {
  return (
  <TimerButton theme = {theme} disabled = {activeState} onClick = {onClick}>
      {label}
  </TimerButton>
  );
};


export default Button;