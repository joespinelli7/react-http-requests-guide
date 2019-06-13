import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// using interceptors: functions that execute for every request leaving your app and every response returning
// into it. Interceptor line 10 is a request interceptor. You always need to return the request.
axios.interceptors.request.use(request => {
  console.log(request);
  // edit request config
  return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// interceptor to handle responses.
axios.interceptors.response.use(response => {
  console.log(response);
  // edit request config
  return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
