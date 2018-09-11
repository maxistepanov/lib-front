import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { FullWidth } from 'layouts';

import {
  CounterContainer,
  FeedContainer,
  CatalogContainer,
} from '../containers';

import Path from './Path';
import PostDetail from '../components/Feed/PostDetail';

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Path exact path="/" component={FeedContainer} />
        <Path exact path="/post/:id" component={PostDetail} />
        <Path
          exact
          path="/service/catalog"
          layout={FullWidth}
          component={CatalogContainer}
        />
        <Path exact path="/counter" component={CounterContainer} />
        <Redirect from="/" to="/" />
        <Redirect from="*" to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
