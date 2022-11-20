import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import AddView from "./views/AddView";
import logo from './logo.svg'
import { enqueue, dequeue, removeFromQueue } from "./utils/helpers";

import {TimerContext} from "./context";

const Container = styled.div`
  background: #d2d2d4;
  height: 100vh;
  overflow: auto;
`;

const NavLink = styled(Link)`
  padding: 5px 15px;
  margin: 10px;
  border-radius: 10px;
  color: white;
  background-color: #383838;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    opacity: 90%;
  }
  &:active {
    opacity: 100%;
  }
`;

const NavLinkContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
  font-family: Poppins, serif;
  font-size: 1.1rem;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Nav = () => {

  return (
    <nav>
      <NavLinkContainer>
        <li>
          <NavLink to="/">Timers</NavLink>
        </li>
        <li>
          <NavLink to="/docs">Documentation</NavLink>
        </li>
        <li>
          <NavLink to = "/add">Add</NavLink>
        </li>
      </NavLinkContainer>
    </nav>
  );
};

const App = () => {
  const [timerQueue, setTimerQueue] = useState([]);
  const [timerRunningState, setTimerRunningState] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  const [initialQueue, setInitialQueue] = useState([]);

  const addToQueue = (newTimer) => {
    enqueue(timerQueue, setTimerQueue, newTimer);
    setInitialQueue([...initialQueue, newTimer]);
  }
  const deleteFromQueue = (index) => {
    removeFromQueue(timerQueue, setTimerQueue, index);
  }
  const removeCurrentTimer = () => {
    dequeue(timerQueue, setTimerQueue);
  }


  return (
    <TimerContext.Provider value={{timerQueue, initialQueue, setInitialQueue, setTimerQueue, addToQueue, deleteFromQueue, removeCurrentTimer,  timerRunningState, setTimerRunningState, totalTime, setTotalTime}}> 
      <Container>
        <Router>
          <Nav />
          <Logo src= {logo} alt="Logo"/>
          <Routes>
            <Route path="/docs" element={<DocumentationView />} />
            <Route path="/" element={<TimersView />} />
            <Route path="/add" element={<AddView />} />
          </Routes>
        </Router>
      </Container>
    </TimerContext.Provider>
  );
};

export default App;
