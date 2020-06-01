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
   data =  [
    {
      id: 1,
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Kolkata', 'Chennai', 'Mumbai'],
      answer: "",
      correctAnswer: 0
    },
    {
      id: 2,
      question: 'What is the capital of West Bengal?',
      options: ['New Delhi', 'Kolkata', 'Chennai', 'Mumbai'],
      answer: "",
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'Sun rises in the east',
      options: ['True', 'False'],
      answer: "",
      correctAnswer: 0
    }

  ]

  constructor(private router:Router, private quizService:QuizService) { }

  ngOnInit() {
    this.quizService.qnProgress = 0;
    this.quizService.seconds = 0;
    

    //console.log(this.data);
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
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress == this.numberOfQuestions){
      console.log("All questions answered");
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
