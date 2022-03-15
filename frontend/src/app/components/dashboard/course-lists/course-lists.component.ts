import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { CourseService } from 'src/app/services/courseService/course.service';
import {CoursesListService} from '../../../services/coursedashboard/courses.service'
import  {store} from '../../../reducers/store';

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  num:number[]=[1,2,3,4];
  courses:any;
  show:boolean=false;
  searchText:any;
   

  constructor(private CoursesListService:CoursesListService,private CourseService:CourseService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.CoursesListService.getCourses().subscribe((data)=>{
      this.courses=(data as any).data
    })
  }

  showdesc(){
    this.show=!this.show
  }
  setSearch(name:String){
    this.searchText=name
  };
  selectCourse(course:any){
    console.log(course);
    console.log(store.getState());
    const data =this.authService.isLoggedIn();
    const courseId=course._id;
    const userId= (data as any).decodedToken.user._id;

    const firstName= (data as any).decodedToken.user.firstName;

    const courseTitle=course.courseTitle
    console.log(userId,firstName);
    this.CourseService.addCourse({userId,course,firstName}).subscribe((data)=>{{
   this.router.navigate(['/tutor']) ;
    }})

  }
  

}
