import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
      loadedPost: null
    }

    componentDidUpdate() {
      //1st check(line 13): to see if we're being passed down an id of post being clicked
      //2nd check(line 14): to see if we don't have a loadedPost already or if we do have a loadedPost
      // but then it also has a different id than the id we plan on loading. Prevents infinite network loop
      // so component doesn't keep updating.
      if(this.props.id) {
        if( !this.state.loadedPost || this.state.loadedPost.id !== this.props.id ) {
          axios.get('/posts/' + this.props.id)
            .then(res => {
              // console.log(res)
              this.setState({
                loadedPost: res.data
              })
            })
        }
      }
    }

    deletePostHandler = () => {
      axios.delete('/posts/' + this.props.id)
        .then(res => {
          console.log(res)
        })
    }

    // line 25-25: first we get id(which we check on line 25) then after we render the actual loadedPost(line 26)
    // b/c the fetch call is asynchronous. So we input a loading message for the initial clicking of the id(line 25),
    // then output the actual post(line 26) when it is updated in state.
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
          post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
          post = (
            <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
            </div>
            </div>

          );
        }
        return post;
    }
}

export default FullPost;
