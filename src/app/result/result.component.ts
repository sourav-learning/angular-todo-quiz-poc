import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: any[];
  constructor(private router:Router, private quizService:QuizService) { }

  ngOnInit() {
    this.result = this.quizService.qns;
  }

}
