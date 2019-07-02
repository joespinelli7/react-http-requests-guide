import React from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
  state = {
    posts: []
  }

  // using catch in line 26 to catch any errors and if we do render line 41 b/c we're getting an error
  // trying to make the GET request. However, if there is no error in GET request then we render all
  // posts smoothly.
  componentDidMount() {
    console.log(this.props)
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

  // Used when implementing <LINK /> as we do in this components render method:
  // postSelectedHandler = (id) => {
  //   this.setState({
  //     selectedPostId: id
  //   });
  // }

  // Used to navigate programmatically: (instead of using <Link /> from react-router-dom):
  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/posts/' + id});
    // this.props.history.push('/posts/' + id);
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong :(</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/posts/' + post.id} key={post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          // </Link>
        )
      });
    }

    return (
      <div>
        <section className="Posts">
            {posts}
        </section>
        {/* path="/:id" (:id) creates a flexible path that can be whatever you designate, so must
         go before any other similar routes, (such as "/new-post" in Blog.js component)*/}
        <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
      </div>
    )
  }
}

export default Posts;
