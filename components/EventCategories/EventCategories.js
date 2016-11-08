import React, { Component } from 'react';

export default class EventCategory extends Component {
  constructor(props) {
    super(props);
    this.state={
      post:[]
    }

    componentDidMount() {
    // ajax, dom-based library usage here
    $.get(`/api/posts/props.prams.id`)
    .done(post) => {
      this.setState({
        post: post;
      });
    };
  }

    };
  }

    render() { 
    return (
      <div>
        <h2>Post</h2>
          <h3>this.state.post.title</h3>
          <p>this.state.post.body</p>
      </div>
     );    
  }
};