import React from "react";
import { Route } from "react-router-dom";
import Users from "./page/Users";
import User from "./page/User";
import Repository from "./page/Repository";

function Routers() {
  return (
    <div>
      <Route exact path="/" component={Users} />
      <Route exact path="/user" component={User} />
      <Route exact path="/repository" component={Repository} />
    </div>
  );
}

export default Routers;
