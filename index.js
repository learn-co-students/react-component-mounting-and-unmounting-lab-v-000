import React from 'react'; 
import ReactDOM from 'react-dom'; 

import Game from './components/Game'; 

ReactDOM.render(
  <Game />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
