import React from 'react';
import { Header, Menu, Footer } from 'components';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import withScreenLoader from 'modules/withScreenLoader';
import { connect } from 'react-redux';
import '../styles/app.css';
import { requestMenu } from '../actions/menu';

class App extends React.Component {
  componentDidMount() {
    this.props.menu();
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
    menu: () => dispatch(requestMenu()),
  };
};

export default withScreenLoader(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);

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
