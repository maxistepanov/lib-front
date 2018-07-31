import React from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";

import { CounterContainer, FeedContainer } from "../containers";
import Path from "./Path";

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Path exact path="/" component={FeedContainer} />
        <Path exact path="/counter" component={CounterContainer} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
