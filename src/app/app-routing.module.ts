import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'todos', component: TodoComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'home', component: HomeComponent},
  {path: 'result', component: ResultComponent},
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
