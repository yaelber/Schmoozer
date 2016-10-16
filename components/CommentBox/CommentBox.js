import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props); // makes this a React component
    this.state = {
      text: '',
      addedPhoto: false
    };
    // custom method? bind them!
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddPhoto = this.toggleAddPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    }, () => {
      // success callback as the second argument in setState
      console.log('handleChange: sets text to ', this.state.text);
    });
  }

  toggleAddPhoto() {
    this.setState({
      addedPhoto: !this.state.addedPhoto
    });
  }

  // componentWillMount() {
  //   // happens before the FIRST render 
  //   // can access the client
  //   console.log('component will mount', window, 'only called once!');
  // }

  // componentWillUpdate() {
  //   console.log('component will update gets called on every state/prop change')
  // }

  // componentDidUpdate() {
  //   console.log('component DID update');
  // }

  onSubmit() {
    console.log('onSubmit');
    $.post(`/posts/${POSTIDHERE}/comments/new`, {
      text: this.state.text
    }, () => {
      // on success
      console.log('Successfully added a comment!');
    });
  }

  render() {
    const addedPhotoLength = this.state.text.length + (this.state.addedPhoto ? 20 : 0);
    return (
      <div className="well clearfix">
        <textarea
          onChange={this.handleChange}
          className="form-control"></textarea><br/>
        <span>
          {300 - addedPhotoLength} remaining characters.
        </span>
        <button
          className="btn btn-primary pull-right"
          onClick={this.toggleAddPhoto}>
          {this.state.addedPhoto ? "Added Photo" : "Add Photo"}
        </button>
        <button
          disabled={addedPhotoLength === 0 || addedPhotoLength > 300}
          onSubmit={this.onSubmit}
          className="btn btn-primary pull-right">Comment</button>
      </div>
    );
  }
}

export default CommentBox;
