import React from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends React.Component {
  state = {
    posts: []
  }

  // using catch in line 26 to catch any errors and if we do render line 41 b/c we're getting an error
  // trying to make the GET request. However, if there is no error in GET request then we render all
  // posts smoothly.
  componentDidMount() {
    // console.log(this.props)
    axios.get('/posts')
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Joe'
          }
        })
        this.setState({
          posts: updatedPosts
          // console.log(res)
        });
      })
      .catch(error => {
        console.log(error)
        // this.setState({
        //   error: true
        // })
      });
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    });
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong :(</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
                  key={post.id}
                  title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)}
               />
      });
    }

    return (
      <section className="Posts">
          {posts}
      </section>
    )
  }
}

export default Posts;
