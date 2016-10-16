import React, { Component, PropTypes } from 'react';

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

  toggleAddPhoto(e) {
    // click handler on the added photo button
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

  onSubmit(e) {
    e.preventDefault();
    $.post(`/posts/${this.props.postId}/comments/new`, {
      text: this.state.text
    }, (response) => {
      // on success, get back the json
      console.log('Successfully added a comment!', response);
    });
  }

  render() {
    const addedPhotoLength = this.state.text.length + (this.state.addedPhoto ? 20 : 0);
    return (
      <form className="well clearfix"
        onSubmit={this.onSubmit}>
        <textarea
          onChange={this.handleChange}
          className="form-control"></textarea><br/>
        <span>
          {300 - addedPhotoLength} remaining characters.
        </span>
        <button
          type="button"
          className="btn btn-primary pull-right"
          onClick={this.toggleAddPhoto}>
          {this.state.addedPhoto ? "Added Photo" : "Add Photo"}
        </button>
        <input
          type="submit"
          value="Comment"
          disabled={addedPhotoLength === 0 || addedPhotoLength > 300}
          className="btn btn-primary pull-right" />
      </form>
    );
  }
}

CommentBox.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentBox;
