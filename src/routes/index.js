import React from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";

import { CounterContainer, FeedContainer } from "../containers";
import Path from "./Path";
import PostDetail from "../components/Feed/PostDetail";

function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Path exact path="/" component={FeedContainer} />
        <Path exact path="/post/:id" component={PostDetail} />
        <Path exact path="/counter" component={CounterContainer} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
