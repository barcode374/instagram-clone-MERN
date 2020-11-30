import React from 'react';
import logo from './logo.svg';
import {Spring} from 'react-spring/renderprops';
import './main.scss'


import Feed from './Components/feed/Feed';
function App() {
  return (
   
    <div className="App">
   {/* <Spring
   from={{opacity:0,color:"red"}}
   to={{opacity:1,color:"red"}}
   >
      {props =>(
        <h1 style={props}>ok</h1>
      )}
    </Spring> */}
<Feed></Feed>
    </div>
  );
}

export default App;
