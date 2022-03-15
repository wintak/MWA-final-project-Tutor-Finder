import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [
  ]
})
export class TeachersComponent  {

  @Input('teachers') lists: any ;
  

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
   
    
    }

    ngOnInit(): void {
           this.studentService.getEnrollment().subscribe((data)=>{
             console.log("from enrollment" +data)
           })
    }
  


}
