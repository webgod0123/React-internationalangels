import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../views/Home";
import Explore from "../views/Explore";
import Contact from "../views/Contact";
import Roadmap from "../views/Roadmap";
import Layout from "../components/Layout";

const routes = [
  { path: "/home", component: Home },
  { path: "/explore", component: Explore },
  { path: "/contact", component: Contact },
  { path: "/roadmap", component: Roadmap },
];

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))}
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
