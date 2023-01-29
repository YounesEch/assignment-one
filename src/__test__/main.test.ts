/**
 * @jest-enviroment jsdom
 */

import { createNewTodo, clearTodos } from "../ts/main";
import { Todo } from "../ts/models/Todo";
import * as main from '../ts/main';
import * as functions from '../ts/functions';



beforeEach (()=>{
document.body.innerHTML=""; //säger att dokumentet alltid nollställs inför ett test
});


//**********************ceate a new todo*********************//

test("should create a new todo, HTML",()=>{
    //Arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todoText = "new todo";
    let todos: Todo[] = [];
    //act

    createNewTodo(todoText, todos);
    let result = document.getElementById('todos');
    //assert
    expect(result).toBe("new todo");
    expect(result?.innerHTML).not.toBe("null");
});


//**********************clear todo*********************//
test ("should clear todo", () =>{
    //arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let spyOnRemoveAll= jest.spyOn(functions, "removeAllTodos").mockRejectedValue;
    let spyOncreateHtml = jest.spyOn(main, "createHtml").mockReturnValue(); 
    //act
    main.clearTodos([]);
    //assert
    expect(spyOnRemoveAll).toBeCalled();
    expect(spyOncreateHtml).toBeCalled();
})










    //arrange (krav för att möjliggöra testet, let etc)
    //act (vad som ska testas, funtionen)
    //assert (förväntat utfall, expect)


//bör göra ett test ifall man lägger in rätt mening samt även ifall det inte är inlagt rätt mening dvs 2 st för varje funktion
//describe("funktionen", ()={
    //beskriver testerna när testet görs})