import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
     course_id: [''],
     Title:[''],
     Descripttion:['']

    })

  }

}
