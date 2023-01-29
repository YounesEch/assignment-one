/**
*@jest-environment jsdom
*/

import * as main from "../ts/main"
import * as functions from "../ts/functions"
import { Todo } from "../ts/models/Todo";

beforeEach (()  => {
    document.body.innerHTML = " ";
     
    });



test("should changeTodo", () => {
    //arrange
    let todos: Todo = {text:"hello", done:false};
    //act
    functions.changeTodo(todos);
    //assert
    expect(todos.done).toBe(true);
});



test("should split the removeAllTodos", () => {
    //arrange
    let todos: Todo[]= [{text:"hello", done: true}];
    //act
    functions.removeAllTodos(todos);

    //assert
    expect(todos.length).toBe(0);
});