import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
      loadedPost: null
    }

    componentDidUpdate() {
      if(this.props.id) {
        if( !this.state.loadedPost || (this.state.loadedPost.id !== this.props.id) ) {
          axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(res => {
              // console.log(res)
              this.setState({
                loadedPost: res.data
              })
            })
        }
      }
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
            <p>{this.state.body}</p>
            <div className="Edit">
            <button className="Delete">Delete</button>
            </div>
            </div>

          );
        }
        return post;
    }
}

export default FullPost;
