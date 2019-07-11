import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// b/c wrapping the div in App.js component with react-router-dom, now every sub component has
// access to routing.

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // can use basename to set a base url that all other routes and links will follow, for ex. if your server is
      // example.com/my-app then you'd want to include basename as shown below. Otherwise, if not indicated,
      // <BrowserRouter /> automatically takes a default basename="/".
      // <BrowserRouter basename="/my-app">
      <BrowserRouter >
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
