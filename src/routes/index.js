import React from "react";
import { CounterContainer } from "containers";
import { Header } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={CounterContainer} />
      </Container>
    </Router>
  );
}

export default Routes;

const Container = styled.div`
  text-align: center;
  width: 900px;
  margin: 0 auto;
`;
