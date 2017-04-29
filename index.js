const React = require('react');
const ReactDOM = require('react-dom');

// const Game = require('./components/Game');
import Game from './components/Game'

ReactDOM.render(
  <Game />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
