import axios from 'axios';

// now you can use this instance in certain places in your app to override some of the default settings
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// here you can assign a different value(or AUTH TOKEN) for default when using this instance component
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// can use interceptors in these components as well
// instance.interceptors.request...

export default instance;
