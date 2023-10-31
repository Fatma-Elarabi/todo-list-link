import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path: 'todo', component: TodoListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/todo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
