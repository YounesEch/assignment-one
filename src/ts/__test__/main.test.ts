/**
 * @jest-enviroment jsdom
 */

import { createNewTodo } from "../main";
import { Todo } from "../models/Todo";

beforeEach (()=>{
document.body.innerHTML=""; //säger att dokumentet alltid nollställs inför ett test
});

test("should create a new todo, HTML",()=>{
    //Arrenge
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let todoText = "new todo";
    let todos: Todo[] = [];
    //act

    createNewTodo(todoText, todos);
    let result = document.getElementById('todos');
    //assert
    expect(result).toBe("new todo");
    expect(result?.innerHTML).not.toBe("null");
});












    //arrange (krav för att möjliggöra testet, let etc)
    //act (vad som ska testas, funtionen)
    //assert (förväntat utfall, expect)


//bör göra ett test ifall man lägger in rätt mening samt även ifall det inte är inlagt rätt mening dvs 2 st för varje funktion
//describe("funktionen", ()={
    //beskriver testerna när testet görs})