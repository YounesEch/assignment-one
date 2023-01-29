/**
* @jest-environment jsdom
*/

import { Todo } from "../ts/models/Todo";
import { createNewTodo, clearTodos, createHtml, toggleTodo, displayError } from "../ts/main";
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
    expect(result).toBeTruthy();
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
});


//*************************createHTMl************************//
/*test("should create a new HTML dom", () => {
    //arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todos: Todo []= [{text:"hello", done:true}];
    let todosContainer ='<li class="todo__text--done todo__text">hello</li>';

    const todoResult = document.getElementById('todos')?.innerHTML;
    //act
    main.createHtml(todos);
    
    //assert
    expect(todoResult).toBe(todosContainer);
});*/



test("should call toggleTodo", () =>{
    //arrange
    let spyToggleTodo = jest.spyOn(main, "createHtml").mockReturnValue();
    let todos: Todo[] = [{text: "test", done: true}];
    //act
    main.createHtml(todos);

    //assert
    expect(spyToggleTodo).toBeCalled();
})




//*****************toggleTodo***********//
test("should toggle the todo list", () => {
    //arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOnChangeTodo = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

    let todos: Todo = { text: 'test', done: false };
    
    //act
    toggleTodo(todos);
    
    //assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
    expect(spyOnCreateHtml).toHaveBeenCalled();

});

/***********************display error*******************/

test("should display an error message", () => {
    //arrange    
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let errorContainer = document.getElementById("error") as HTMLDivElement;
    let errorText = "error";
    
    //act    
    displayError(errorText,true);

    //assert   
    expect(errorContainer.innerHTML).toBe(errorText);
});

test ("should not display an error message", () => {
    //arrange    
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let errorContainer = document.getElementById("error") as HTMLDivElement;
    let errorText = "error";
    
    //act    
    displayError(errorText,false);

    //assert   
    expect(errorContainer.innerHTML).toBe(errorText);
});


//**********************clear todo*********************//
test("should clearTodos", () => {
    //arrenge
    let spyOnRemoveAllTodos= jest.spyOn(functions, "removeAllTodos").mockReturnValue();
    let spyOncreateHtml= jest.spyOn(main, "createHtml").mockReturnValue();
    let todo: Todo[] = [{text: 'try', done: true}];

    //act
    clearTodos(todo);
    //assert
    expect(spyOnRemoveAllTodos).toHaveBeenCalled();
    expect(spyOncreateHtml).toBeCalled();

});






    //arrange (krav för att möjliggöra testet, let etc)
    //act (vad som ska testas, funtionen)
    //assert (förväntat utfall, expect)


//bör göra ett test ifall man lägger in rätt mening samt även ifall det inte är inlagt rätt mening dvs 2 st för varje funktion
//describe("funktionen", ()={
//beskriver testerna när testet görs})