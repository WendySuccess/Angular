import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserUpdateComponent } from './user-update/user-update.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import { QuizService } from './services/quiz-service.service';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    UserAddComponent,
    PageNotFoundComponent,
    UserUpdateComponent,
    LoginComponent,
    RegisterComponent,
    QuizComponent,
    ReviewComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizService,AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
