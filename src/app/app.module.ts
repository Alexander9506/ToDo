import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoItemComponent,
    CreateTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
