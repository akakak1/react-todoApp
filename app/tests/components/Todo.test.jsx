var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');


import * as actions from 'actions';
import {Todo} from 'Todo';     // since there are multiple exports in Todo then an object is returned that contains all exports as the properties of that object.
                                 //NOTE: here we are not requiring the default export, to require default export we have to use import.
describe('Todo', ()=>{
    it('should exist', ()=>{
        expect(Todo).toExist();
    })

    describe('onToggle', ()=> {
        it('should dispatch TOGGLE_TODO action on click', ()=> {
            var todoData = {
                id:199,
                text:'Test features',
                completed: false
            };

            var action = actions.startToggleTodo(todoData.id, !todoData.completed);

            var spy = expect.createSpy();
            var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);    // here we are using spy for dispatch
            var $el = $(ReactDOM.findDOMNode(todo));

            TestUtils.Simulate.click($el[0]);
            
            expect(spy).toHaveBeenCalledWith(action);

        })
    })
})