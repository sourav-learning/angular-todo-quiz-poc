import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  qns: any[];
  seconds: number;
  timer: any;
  qnProgress: number;

  /*data =  [
    {
      id: 1,
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Kolkata', 'Chennai', 'Mumbai'],
      answer: "",
      correctAnswer: "New Delhi"
    },
    {
      id: 2,
      question: 'What is the capital of West Bengal?',
      options: ['New Delhi', 'Kolkata', 'Chennai', 'Mumbai'],
      answer: "",
      correctAnswer: "Kolkata"
    },
    {
      id: 3,
      question: 'Sun rises in the east',
      options: ['True', 'False'],
      answer: "",
      correctAnswer: "True"
    },
    {
      id: 4,
      question: 'How many days are there in a week',
      options: ['4', '5', '6', '7'],
      answer: "",
      correctAnswer: "7"
    }

  ]*/


  constructor() { }

  displayTimeElapsed(){
    
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  

  /*getQuestions(){
    return this.data;
  }*/
}
