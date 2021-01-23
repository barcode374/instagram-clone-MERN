import React from "react";

import "./main.scss";

import Nav from "./Components/Nav/Nav";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import { ApolloProvider } from "@apollo/client";
import client from "./GQLclient/client";





function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/">
  <Home />
        </Route>
        <Route path="/likes">
          <Nav likes={true} home={false} profile={false} />
          <p>likes</p>
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    </ApolloProvider>
  );
}

export default App;
