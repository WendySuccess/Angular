import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'users',component:UsersComponent , canActivate:[AuthGuard]},
  { path:'user-detail/:id',component:UserDetailComponent},
  { path:'user-add', component:UserAddComponent},
  { path:'user-update/:id', component:UserUpdateComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'quiz', component:QuizComponent, canActivate:[AuthGuard]},
  { path:'review', component:ReviewComponent, canActivate:[AuthGuard]},
  { path:'result', component:ResultComponent, canActivate:[AuthGuard]},
  { path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
