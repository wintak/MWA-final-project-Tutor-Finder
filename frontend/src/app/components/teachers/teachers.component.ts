import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [
  ]
})
export class TeachersComponent {

  @Input('teachers') lists: any = []
  

  constructor(private studentService: StudentService, private router: Router) { }

  enroll(courseId:any){
      this.studentService.sendEnrollment(courseId).subscribe(res => {
        if(res.msg == 'sucessful'){
          this.router.navigate(['courses'])
        }
      })
  }


}
