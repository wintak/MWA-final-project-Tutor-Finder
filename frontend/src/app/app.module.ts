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
<<<<<<< HEAD
import { CourseComponent } from './components/courses/course/course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CourseAddComponent } from './components/courses/course-add/course-add.component';
import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';

=======
import { SignupStudentComponent } from './components/auth/signup-student/signup-student.component';
import { SignupTeacherComponent } from './components/auth/signup-teacher/signup-teacher.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import  {AuthGuard} from './services/authServices/auth.guard'
import {RoleTeacherGuard} from './services/authServices/roleTeacher.guard'
import {RoleStudentGuard} from './services/authServices/roleStudent.guard'
import { AuthInterceptor } from './services/authServices/AuthInterceptor';
>>>>>>> e5d5b9dcbc4ba8c5d8e508f89c0248812ba39317
//  paths
const MyRoutes:Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
<<<<<<< HEAD
  {path:'teacher',component:CourseComponent}
=======
  {path:'signupStudent',component:SignupStudentComponent},
  {path:'SignupTeacher',component:SignupTeacherComponent},

  // {path:'SignupTeacher',component:SignupTeacherComponent,canActivate:[AuthGuard]},
  {path:'signin',component:SigninComponent}

>>>>>>> e5d5b9dcbc4ba8c5d8e508f89c0248812ba39317

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    CourseComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent
=======
    SignupStudentComponent,
    SignupTeacherComponent,
    SigninComponent
>>>>>>> e5d5b9dcbc4ba8c5d8e508f89c0248812ba39317
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
