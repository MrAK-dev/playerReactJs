import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header";

import Player from "./containers/player";
import Auth from "./containers/auth";

export default () => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={Player} />
      <Route exact path="/auth" component={Auth} />

      <Route
        exact
        path="/exact"
        render={() => (
          <div>
            <Redirect to="/" />
          </div>
        )}
      />

      <Route exact render={() => <div>PAGE 404 NOT FOUND</div>} />
    </Switch>
  </div>
);
