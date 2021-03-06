var React = require('react');
var {connect} = require('react-redux');    // this function is a companion to the Provider, the connect() allows an individual component to connect to the store and get the required part of the state.
import Todo from 'Todo';
var TodoAPI =require('TodoAPI')

export var TodoList = React.createClass({

    render: function(){
        
        var {todos, showCompleted, searchText} = this.props;   // note: here we are not specifying  this.props.state   ... how is it extracting the properties from the state object

        var renderTodos=()=> {
            
            var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            if(filteredTodos.length === 0) {
                return (
                    <p className="container__message">ALL DONE</p>
                )
            }
            return filteredTodos.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state   // here we need all the props of the 
    }
)(TodoList);