import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {
  
  }

}
