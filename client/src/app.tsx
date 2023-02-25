import React, { Component, ReactNode } from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Welcome from "./pages/Welcome";

class App extends Component<RouteComponentProps> {
  render(): ReactNode {
    return (
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/auth/login">
          <Auth />
        </Route>
        <Route path="/auth/signup">
          <Auth />
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);
