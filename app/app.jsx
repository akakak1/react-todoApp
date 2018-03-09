var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');   // this will allow the child components to access the store and call dispatch
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // Object Destructuring

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';




store.dispatch(actions.startAddTodos());


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory}>           
         <Route path="/">
            <Route path="todos" component={TodoApp}/>
            <IndexRoute component={Login}/>
         </Route>
      </Router>         
  </Provider>,
  document.getElementById('app')
);

//Use of HASH History .....................
// we want hash history .... which will be stored on the client, we dont have to do anything on the server with our Router.
