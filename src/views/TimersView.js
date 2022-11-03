import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Panel from "../components/generic/Panel";

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

const TimerTitle = styled.div``;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Panel key={`timer-${timer.title}`}>
          <Timer>
            <TimerTitle>{timer.title}</TimerTitle>
            {timer.C}
          </Timer>
        </Panel>
      ))}
    </Timers>
  );
};

export default TimersView;
