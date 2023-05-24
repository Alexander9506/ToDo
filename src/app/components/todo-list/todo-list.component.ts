import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/Item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: Item[] = [
    { title: 'Aufraeumen', description: 'Beschreibung', done: false },
    { title: 'Einkaufen', description: 'Beschreibung2', done: true },
    {
      title: 'Waesche waschen',
      description: 'Beschreibung3',
      done: true,
    },
  ];

  addItem(item: Item) {
    this.items.unshift(item);
  }

  deleteListItem(toDelete: Item) {
    this.items = this.items.filter((item) => {
      return item != toDelete;
    });
  }
}
