import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {



  Quizs: Array<Quiz> = [];
  score: number =0;

  constructor(private _http:HttpClient, private _QuizService: QuizService,  private _router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("score",'');
    this._QuizService.getQuiz().subscribe(result =>{
      console.log(result);
      this.Quizs= result;
    },error =>{
    console.log(error);
    })
  }

 

  CheckAnswer(){
    console.log(  this.Quizs);
    for(let i = 0; i< this.Quizs.length;i++){
      if(this.Quizs[i].answer==this.Quizs[i].useranswer)
      this.score ++;
    }
    console.log(this.score);
    localStorage.setItem("score",this.score + "/" + this.Quizs.length);
    this._router.navigate(['/review']);
  }

}
