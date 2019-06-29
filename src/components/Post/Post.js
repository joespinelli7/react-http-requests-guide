import React from 'react';
// import { withRouter } from 'react-router-dom';
import './Post.css';

// withRouter is a HOC and makes a component "route aware" and give it access to route props of
// associated component(in this case, would be receiving the props of Posts).
//A higher-order component in React is a pattern used to share common functionality between components without
// repeating code. A higher-order component is actually not a component though, it is a function.
// A HOC function takes a component as an argument and returns a component. It transforms a component into
// another component and adds additional data or functionality.

const post = (props) => (
      <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
      </article>
)

// export default withRouter(post);
export default post;
