import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: Item[] = [
    { title: 'Aufraeumen', description: 'Beschreibung', done: false },
    { title: 'Einkaufen', description: 'Beschreibung2', done: true },
    {
      title: 'Waesche waschen',
      description: 'Beschreibung3',
      done: true,
    },
  ];

  constructor() {}

  getTodos(): Item[] {
    return [...this.items];
  }

  addTodo(item: Item) {
    this.items.unshift(item);
  }

  deleteItem(toDelete: Item) {
    this.items = this.items.filter((item) => {
      return item != toDelete;
    });
  }
}
