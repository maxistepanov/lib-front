import React from 'react';
import { Header, Menu, Footer } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import '../styles/app.css';
import { init } from '../actions/init';

class App extends React.Component {
  componentDidMount() {
    this.props.init();
  }
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(init()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

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
