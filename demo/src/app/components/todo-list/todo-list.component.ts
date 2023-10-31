import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Itodo } from 'src/app/model/todo-item.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoForm!: FormGroup;
  itemsList!: Array<Itodo>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.initForm();
    this.getTodoItems();
  }

  getTodoItems(): void {
    this.itemsList = this.todoListService.getTodoList(); 
  }

  initForm(): void {
    this.todoForm = new FormGroup({
      item: new FormControl(''),
    });
  }

  addToList(): void {
    const newItem: Itodo = {
      id: Math.random(),
      name: this.todoForm?.controls['item'].value,
      isChecked: false,
    };
    if (this.itemsList.some((e) => e.name === newItem.name)) {
      alert('Item is already exist!');
    } else {
      this.itemsList.push(newItem);
      localStorage.setItem('todoList', JSON.stringify(this.itemsList));
      this.todoForm.controls['item'].setValue('');
    }
  }

  onCheckItem(checkedItem: Itodo) {
    this.itemsList.map((item) => {
      if (item.id === checkedItem.id) {
        item.isChecked = !item.isChecked;
      }
    });
  }

  deleteItem(item: Itodo) {
    this.itemsList = this.itemsList.filter( x => x.id !== item.id);
    localStorage.setItem('todoList', JSON.stringify(this.itemsList));    
  }
}
