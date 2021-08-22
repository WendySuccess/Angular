import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  Quizs: Array<Quiz> = [];
  score: String|any =0;

  constructor(private _http:HttpClient, private _QuizService: QuizService,  private _router: Router) { }

  ngOnInit(): void {
    this.score = localStorage.getItem('score');
    this._QuizService.getQuiz().subscribe(result =>{
      console.log(result);
      for(let i = 0; i< result.length;i++){
        if(result[i].answer  == 'a')
        result[i].answer = result[i].OptionA;
  
        if(result[i].answer  == 'b')
        result[i].answer = result[i].OptionB;
  
        if(result[i].answer  == 'c')
        result[i].answer =result[i].OptionC;
  
        
        if(result[i].answer  == 'd')
        result[i].answer = result[i].OptionD;
  
      }
      this.Quizs= result;
    },error =>{
    console.log(error);
    })
   
   

  }




}
