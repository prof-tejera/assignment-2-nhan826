import React, {useState, useContext} from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Panel from "../components/generic/Panel";
import DeleteBtn from "../components/generic/DeleteBtn";

import { TimerContext } from "../context";


const timerStateStyle = {
  active: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  disabled: {
    opacity: .4,
    pointerEvents: 'none'
  }
}

const TimerBody = styled.div`
  opacity:  ${props => timerStateStyle[props.timerStateStyle].opacity};
  pointer-events: ${props => timerStateStyle[props.timerStateStyle].pointerEvents};
`

TimerBody.defaultProps = {
  type: 'active'
}

const Timers = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.div`
  cursor: default !important;
  border: 7px double #d2d2d4;
  border-radius: 15px;
  padding: 20px;
  background-color: #19191a;
  color: white;
  letter-spacing: 2px;
  margin: 10px;
  font-size: 1.25rem;
  font-family: 'Orbitron', sans-serif;
  transition: all 0.3s ease;
  width: 90%;
  text-align: center;
  @media (max-width: 760px) {
    width: 80%;
    text-align: center;
  }
`;

const TimerTitle = styled.div`
`;

const TimersView = () => {
  const context = useContext(TimerContext);
  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  }

  const renderTimer = (timer, index) => {
    if(timer.timer_type === "Stopwatch") {
      return <Stopwatch handleShowDelete={handleShowDelete} {...timer} index={index} />
    }else if(timer.timer_type === "Countdown") {
      return <Countdown  handleShowDelete={handleShowDelete} {...timer} index={index} />
    }else if(timer.timer_type === "XY") {
      return <XY handleShowDelete={handleShowDelete} {...timer} index={index} />
    }else if(timer.timer_type === "Tabata") {
      return <Tabata handleShowDelete={handleShowDelete} {...timer} index={index} />
    }
  }

  const renderTimerQueue = () => {

    // const timerTotalTime = context.timerQueue.reduce((total, timer) => {
    //   return total + timer.timerTotalTime 
    // }, 0)
    return context.timerQueue.map(((timer, index) => {
    return (
    <Panel key={`timer-${timer.id}`}>
      <Timer>
        <DeleteBtn type = {showDelete ? "disabled" : "active"} index = {index}/>
        <TimerTitle>{timer.timer_type}</TimerTitle>
        <TimerBody timerStateStyle = {index > 0 ? "disabled" : "active"} >{renderTimer(timer, index)}</TimerBody>
      </Timer>
    </Panel>)
    }))
  }

  return (
    <Timers>
      {renderTimerQueue()}
    </Timers>
  );
};

export default TimersView;
