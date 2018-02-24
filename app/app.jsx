var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');   // this will allow the child components to access the store and call dispatch
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // Object Destructuring

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();



store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Walk the dog'));
store.dispatch(actions.setSearchText('dog'));
store.dispatch(actions.toggleShowCompleted());


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>           
  </Provider>,
  document.getElementById('app')
);