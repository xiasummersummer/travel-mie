import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Style from '@/layout/Style';
import store from './store';
import * as serviceWorker from './serviceWorker';
import './mock/index'

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter>
      <Switch>
      <Route path = '/register' component = { Style } />
      <Route path = '/food' component = { Style } />
      <Route path = '/food/fooddetail' component = { Style } />
      <Route path = '/scenic' component = { Style } />
      <Route path = '/homesearch' component = { Style } />
      <Route path = '/stratesearch' component = { Style } />
      <Route path = '/sensedetail' component = { Style } />
      <Route path = '/ticket' component = { Style } />
      <Route path = '/login' component = { Style } />
        <Route path = "/" component = { App}/>
      </Switch>
    </HashRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
