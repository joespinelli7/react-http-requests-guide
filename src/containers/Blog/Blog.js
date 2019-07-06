import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch , Redirect} from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      {/* use link instead of <a> tag in React to avoid page reloading and therefore
                        losing any previous state. Instead re-renders JS to dom but w/o resetting state. */}
                      <li><NavLink
                            to="/posts"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                              color: '#fa923f',
                              textDecoration: 'underline'
                            }}>Posts</NavLink>
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
                {/*wrap w/ SWITCH so it goes to first route that matches a given path and won't render
                any othe routes*/}
                <Switch>
                  {/* using a guard to check if user is authenticated and if not, does not have access
                    to New Posts page. */}
                  {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                  <Route path="/posts" component={Posts}/>
                  <Route render={() => <h1 style={{textAlign: 'center'}}>Error: Page not found <span>😢</span></h1>} />
                  {/* redirects from a certain route to a route you specify. Only specify from if using
                    Redirect in a switch statement. */}
                  {/*<Redirect from="/" to="/posts" /> */}
                  {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

// Use relative paths if you want to navigate relative to your existing path.
// <Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a
// component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts ,
// the link would point to /all-posts/new.

export default Blog;
