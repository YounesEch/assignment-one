/**
* @jest-environment jsdom
*/

import { createNewTodo, clearTodos } from "../ts/main";
import { Todo } from "../ts/models/Todo";
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

    main.createNewTodo(todoText, todos);
  
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
    main.createNewTodo(todoText, todos);

    //assert
    expect(result).toBeTruthy();
})



//*************************createHTMl************************//
test("should create a new HTML", () => {

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
})

test("should clear the structur", () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOncreateHtml= jest.spyOn(main, "createHtml").mockReturnValue(); 

    //act
    main.clearTodos([]);
    //assert
    expect(document.getElementById("todos") as HTMLUListElement);

})











    //arrange (krav för att möjliggöra testet, let etc)
    //act (vad som ska testas, funtionen)
    //assert (förväntat utfall, expect)


//bör göra ett test ifall man lägger in rätt mening samt även ifall det inte är inlagt rätt mening dvs 2 st för varje funktion
//describe("funktionen", ()={
    //beskriver testerna när testet görs})