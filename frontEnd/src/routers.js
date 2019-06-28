import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./page/Users";
import User from "./page/User/User";
import Repository from "./page/Repository";

function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/user" component={User} />
        <Route exact path="/repository" component={Repository} />
      </Switch>
    </div>
  );
}

export default Routers;