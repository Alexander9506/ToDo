import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css'],
})
export class CreateTodoItemComponent {
  @Output() itemCreated = new EventEmitter<Item>();

  createItem(item: Item) {
    this.itemCreated.emit(item);
  }
}
