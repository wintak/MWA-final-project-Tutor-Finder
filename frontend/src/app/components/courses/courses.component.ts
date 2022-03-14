import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styles: [
  ]
})
export class CoursesComponent implements OnInit {

  courseLists: any[] = [];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.courseList().subscribe(res => this.courseLists = res)
  }

  removeCourse(courseId:any){
    this.service.removeCourse(courseId).subscribe(
      res =>  {
        if (res.isDeleted === true) {
          this.courseLists = this.courseLists.filter(course => course.id != courseId);
        }
      }
    )
  }
}
