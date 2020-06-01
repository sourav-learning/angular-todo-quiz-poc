import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = [
    {id:1, description: 'Learn to make proper sentences', done: false},
    {id:2, description: 'Learn to swim', done: true},
    {id:3, description: 'Learn to write paragraph', done: false}
  ]
  constructor() { }

  ngOnInit() {
  }

}
