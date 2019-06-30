import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      {/* use link instead of <a> tag in React to avoid page reloading and therefore
                        losing any previous state. Instead re-renders JS to dom but w/o resetting state. */}
                      <li><NavLink
                            to="/"
                            exact
                            activeClassName="my-active"
                            /*activeStyle={{
                              color: '#fa923f',
                              textDecoration: 'underline'
                            }}*/>Home</NavLink>
                      </li>
                      <li><NavLink to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                    </ul>
                  </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

// Use relative paths if you want to navigate relative to your existing path.
// <Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a
// component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts ,
// the link would point to /all-posts/new.

export default Blog;
