import React, { Component } from 'react';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
  }
}

    componentDidMount() {
    // ajax, dom-based library usage here
    $.get(`/api/posts/`)
    .done(posts) => {
      this.setState({
        posts: posts
      );
    });
  }


  render() {
    return (
      <h1> My Blog Posts </h1>
    )
  }
}