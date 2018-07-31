import React from "react";
import { CounterContainer } from "containers";
import { Route } from "react-router-dom";

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" component={CounterContainer} />
    </React.Fragment>
  );
}

export default Routes;
