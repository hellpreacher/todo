import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
    private todos = [
        "Ionic 4.0",
        "Angular",
        "Cordova"
    ];

    private archivedTodos = [];

    constructor(public http: HttpClient) {
        console.log('Hello TodoProvider Provider');
    }

    get getTodos() {
        return this.todos;
    }

    get getArchivedTodos() {
        return this.archivedTodos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    editTodo(todoIndex, todo) {
        this.todos[todoIndex] = todo
    }
    
    archiveTodo(todoIndex) {
        let todoToBeArchived = this.todos[todoIndex];
        this.todos.splice(todoIndex, 1);
        this.archivedTodos.push(todoToBeArchived);
    }
}
