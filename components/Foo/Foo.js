import React, { Component } from 'react';

import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentList/CommentList';

const POST_ID = "2";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    // ajax, dom-based library usage here
    $.ajax({
      url: `/posts/${POST_ID}/comments`
    }, (comments) => {
      this.setState({
        comments: comments
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>
        <CommentBox postId={POST_ID} />
        <hr/>
        <CommentList comments={this.state.comments} />
      </div>
     );    
  }
};