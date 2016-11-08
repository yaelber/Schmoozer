import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

// TODO: explain multiple renders
// ReactDOM.render(
//   <h2>Hello World!</h2>,
//   document.getElementById('root')
// );

// TODO: where can we put a commentbox's postId?
ReactDOM.render(
  <App />,
  document.getElementById('root')
);