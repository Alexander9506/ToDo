import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item?: Item;
  @Output() deleteItem = new EventEmitter<Item>();

  delete() {
    if (this.item) {
      this.deleteItem.emit(this.item);
    }
  }
}
