import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import  userReducer  from './Features/user';
// import UserReducer from './Features/UserLogin'
// import Counter from './Features/Count'
const store = configureStore({
  reducer:{
    user:userReducer,
}
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

