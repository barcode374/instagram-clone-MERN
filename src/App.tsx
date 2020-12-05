import React from 'react';
import logo from './logo.svg';
import {Spring} from 'react-spring/renderprops';
import './main.scss'

import Nav from './Components/Nav/Nav';
import Feed from './Components/feed/Feed';

function App() {
  return (
   
    <div className="App">
      
  <Nav />
<Feed></Feed>
    </div>
  );
}

export default App;
