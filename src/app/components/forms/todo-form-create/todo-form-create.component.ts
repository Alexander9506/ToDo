import { Serializer } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/Item';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-form-create',
  templateUrl: './todo-form-create.component.html',
  styleUrls: ['./todo-form-create.component.css'],
})
export class TodoFormCreateComponent {
  constructor(private service: TodoService, private router: Router) {}

  addTodo(item: Item) {
    this.service.addTodo(item);
    this.router.navigate(['/list']);
  }
}
