import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quiz } from "../models/quiz";

@Injectable()
export class QuizService {
  message: string = "Quiz Management ";
  API_URL: string = "http://localhost:3000";

  constructor (private _http: HttpClient) { }

  
  getQuiz(): Observable<Quiz[]>{
    return this._http.get<Quiz[]>(`${this.API_URL}/Quiz/`);
  }

  getQuizById(id: number):Observable<Quiz>{
    return this._http.get<Quiz>(`${this.API_URL}/Quiz/${id}`);
  }
  addQuiz(Quiz: Quiz):Observable<Quiz>{
      return this._http.post<Quiz>(`${this.API_URL}/Quiz`,Quiz);
  }
  deleteQuiz(id: number):Observable<Quiz>{
    return this._http.delete<Quiz>(`${this.API_URL}/Quiz/${id}`);
  }
  updateQuizById(Quiz: Quiz,id: number ):Observable<Quiz>{ 
    return this._http.put<Quiz>(`${this.API_URL}/Quiz/${id}`,Quiz);
  }


}
