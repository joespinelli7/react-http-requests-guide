import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: [],
      selectedPostId: null,
      error: false
    }

    componentDidMount() {
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
          // console.log(error)
          this.setState({
            error: true
          })
        });
    }

    postSelectedHandler = (id) => {
      this.setState({
        selectedPostId: id
      });
    }

    // using catch in line 30 to catch any errors and if we do render line 46 b/c we're getting an error
    // trying to make the GET request. However, if there is no error in GET request then we render all
    // posts smoothly.
    render () {
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
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/new-post">New Post</a></li>
                    </ul>
                  </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;
