import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";
import logo from './logo.svg'

const Container = styled.div`
  background: #d2d2d4;
  height: 100vh;
  overflow: auto;
`;

const NavLink = styled(Link)`
  padding: 10px;
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 80%;
    text-decoration: underline;
  }
`;

const NavLinkContainer = styled.div`
  margin-top: 20px;
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
      </NavLinkContainer>
    </nav>
  );
};

const App = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Logo src= {logo} alt="Logo"></Logo>
        <Routes>
          <Route path="/docs" element={<DocumentationView />} />
          <Route path="/" element={<TimersView />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
