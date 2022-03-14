import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  searchInput: FormGroup;
  listOfTeachers: any;

  constructor(private fb: FormBuilder, private studentService: StudentService) { 
    this.searchInput = fb.group({
      search : ['', Validators.required]
    })
  }

  search(){
  const input = this.searchInput.controls['search'].value;
  this.studentService.getTeachers(input).subscribe(res => this.listOfTeachers = res )
}

}
