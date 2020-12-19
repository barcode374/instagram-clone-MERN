import React from 'react';
import logo from './logo.svg';
import {Spring} from 'react-spring/renderprops';
import './main.scss'

import Nav from './Components/Nav/Nav';
import Feed from './Components/feed/Feed';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/likes">
      <Nav likes={true} home={false} profile={false}/>
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
  );
}

export default App;
