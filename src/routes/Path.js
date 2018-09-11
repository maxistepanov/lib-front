import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainLayout } from '../layouts/index';

class Path extends React.Component {
  static propTypes = {
    layout: PropTypes.func,
  };

  render() {
    const { layout: Layout = MainLayout } = this.props;
    return (
      <Layout>
        <Route {...this.props} />
      </Layout>
    );
  }
}

export default Path;
