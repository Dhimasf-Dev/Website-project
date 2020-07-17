import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import store from './config/redux'

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root')
)
