import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTodoList(): Array<Itodo> {
    const items = localStorage.getItem('todoList')
    if(items) {
      return JSON.parse(items)
    }

    return [];
  }
}
