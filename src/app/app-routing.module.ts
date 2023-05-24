import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoFormCreateComponent } from './components/forms/todo-form-create/todo-form-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Start URL umleiten
  { path: 'list', component: TodoListComponent }, // link zur ListComponent
  { path: 'home', component: HomeComponent }, // link zur HomeComponent
  { path: 'add-todo', component: TodoFormCreateComponent }, // link zur TodoForm
  { path: '**', component: PageNotFoundComponent }, //Wildcard => alles andere
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
