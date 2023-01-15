import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'',component:TodoListComponent},
  // {path:'',component:ToDoAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
