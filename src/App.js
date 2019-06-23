import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// b/c wrapping the div in App.js component with react-router-dom, now every sub component has
// access to routing.

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
