import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { CoursesService } from 'src/app/services/coursedashboard/courses.service';
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
   

  constructor(private CoursesService:CoursesService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.CoursesService.getCourses().subscribe((data)=>{
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
    const courseTitle=course.courseTitle
    console.log(courseId,courseTitle,userId);;
    if(data == true){
      return false;
    }else if(data.isExpired ==false){
        return true;
    }else{
         return false;
    }

  }

}
