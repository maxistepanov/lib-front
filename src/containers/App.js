import React from "react";
import { Header, Menu, Footer } from "components";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import withScreenLoader from "modules/withScreenLoader";
import '../styles/app.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Menu />
          <Body>{this.props.children}</Body>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default withScreenLoader(App);

const Container = styled.div`
  text-align: center;
  width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;

const Body = styled.div`
  min-height: 600px;
`;
