import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox/CommentBox';

// TODO: explain multiple renders
// ReactDOM.render(
//   <h2>Hello World!</h2>,
//   document.getElementById('root')
// );

// TODO: where can we put a commentbox's postId?
ReactDOM.render(
  <CommentBox post-id={2} />,
  document.getElementById('comment')
);