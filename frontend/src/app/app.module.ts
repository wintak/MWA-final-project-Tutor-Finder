import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import ngRedux from 'ng-redux';


///components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignupStudentComponent } from './components/auth/signup-student/signup-student.component';
import { SignupTeacherComponent } from './components/auth/signup-teacher/signup-teacher.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import  {AuthGuard} from './services/authServices/auth.guard'
import {RoleTeacherGuard} from './services/authServices/roleTeacher.guard'
import {RoleStudentGuard} from './services/authServices/roleStudent.guard'
import { AuthInterceptor } from './services/authServices/AuthInterceptor';
//  paths
const MyRoutes:Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signupStudent',component:SignupStudentComponent},
  {path:'SignupTeacher',component:SignupTeacherComponent},

  // {path:'SignupTeacher',component:SignupTeacherComponent,canActivate:[AuthGuard]},
  {path:'signin',component:SigninComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupStudentComponent,
    SignupTeacherComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MyRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ] ,
   providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
    
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
