/**
*@jest-environment jsdom
*/

import * as functions from "../ts/functions"
import { Todo } from "../ts/models/Todo";

beforeEach (()  => {
    document.body.innerHTML = " ";
     
    });



    



test("should removeAllTodos", () => {
    //arrange
    let todos: Todo[]= [{text:"hello", done: true}];
    //act
    functions.removeAllTodos(todos);

    //assert
    expect(todos.length).toBe(0);
})