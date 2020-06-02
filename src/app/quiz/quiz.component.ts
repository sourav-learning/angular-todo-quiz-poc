import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  numberOfQuestions : number;
  data: any[];

  constructor(private router:Router, private quizService:QuizService) { }

  ngOnInit() {
    this.quizService.qnProgress = 0;
    this.quizService.seconds = 0;
    

    this.data = this.quizService.getQuestions();
    this.quizService.qns = this.data;
    this.numberOfQuestions = this.data.length;
    console.log(this.numberOfQuestions);
    this.startTimer();
    console.log(this.quizService.qns)
  }

  startTimer(){
    this.quizService.timer = setInterval(()=> {
      this.quizService.seconds++;
    },1000);
  }

  myChoice(id, choice){
    console.log(id, choice);
    this.quizService.qns[this.quizService.qnProgress].answer= choice;
    
    
  }

  showNext(){
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress == this.numberOfQuestions){
      console.log("All questions answered");
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
