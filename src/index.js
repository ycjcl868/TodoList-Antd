import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Router, Route, browserHistory, Link} from 'react-router'
import { Provider, connect } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'

const store = createStore(reducer)



render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
