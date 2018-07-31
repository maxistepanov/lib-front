import React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from '../layouts/index';

class Path extends React.Component {
  render() {
    return (
      <MainLayout>
        <Route {...this.props} />
      </MainLayout>
    );
  }
}

export default Path;
