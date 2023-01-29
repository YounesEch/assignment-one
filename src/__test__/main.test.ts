/**
* @jest-environment jsdom
*/

import { Todo } from "../ts/models/Todo";
import { createNewTodo, clearTodos, createHtml, toggleTodo } from "../ts/main";
import * as main from '../ts/main';
import * as functions from '../ts/functions';



beforeEach (()=>{
document.body.innerHTML=""; //säger att dokumentet alltid nollställs inför ett test
});


//**********************createNewTodo*********************//

test("should createNewTodo, HTML",()=>{
    //Arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todoText = "new todo";
    let todos: Todo[] = [];
    let result = document.getElementById('todos');

    //act

    createNewTodo(todoText, todos);
  
    //assert  
    expect(result).not.toBe("new todo");
    expect(result?.innerHTML).not.toBeNull();
});

test("should not createNewTodo", () => {
    //arrenge
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let todoText = "A";
    let todos: Todo[]= [];
    let result = document.getElementById('error');

    //act
    createNewTodo(todoText, todos);

    //assert
    expect(result).toBeTruthy();
})


//*************************createHTMl************************//
/*test("should create a new HTML dom", () => {
    //arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todo = Todo[]= [text: "test", done: false];
    let todosContainer = 
    '<ul id="todos" class="todo">' +
    '<li class="todo__text--done todo__text"></li>' +
    '</ul>';
    //act
    createHtml(todo);
    
    //assert
    expect(document.getElementById("todos")?.outerHTML).toBe(todosContainer);
})*/




//*****************toggleTodo***********//
test("should toggle the todo list", ()=>{
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOnChangeTodo = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let spyOncreateHtml = jest.spyOn(main, "createHtml").mockReturnValue(); 
    let todos: Todo= {text: 'test', done: false};

    toggleTodo(todos);

    expect(spyOnChangeTodo).toBeCalled();
    expect(spyOncreateHtml).not.toBeCalled(); 
})





//**********************clear todo*********************//
test("should clear todo", () => {
    //arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOnRemoveAll= jest.spyOn(functions, "removeAllTodos").mockReturnValue();
    //act
    main.clearTodos([]);
    //assert
    expect(spyOnRemoveAll).toHaveBeenCalled();
});

test("should clear the structur", () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOnCreateHtml= jest.spyOn(main, "createHtml").mockReturnValue(); 

    //act
    clearTodos([]);
    //assert
    expect(spyOnCreateHtml).not.toBeCalled();
});



    //arrange (krav för att möjliggöra testet, let etc)
    //act (vad som ska testas, funtionen)
    //assert (förväntat utfall, expect)


//bör göra ett test ifall man lägger in rätt mening samt även ifall det inte är inlagt rätt mening dvs 2 st för varje funktion
//describe("funktionen", ()={
//beskriver testerna när testet görs})