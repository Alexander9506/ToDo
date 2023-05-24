import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/Item';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: Item[] = [];

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  private refreshList(): void {
    this.items = this.service.getTodos();
  }

  addItem(item: Item) {
    console.log(item);
    this.service.addTodo(item);
    this.refreshList();
  }

  deleteListItem(toDelete: Item) {
    this.service.deleteItem(toDelete);
    this.refreshList();
  }
}
