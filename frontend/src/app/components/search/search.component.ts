import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';
import { AuthService } from 'src/app/services/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchInput: FormGroup;
  listOfTeachers: any[] = [];
  show:boolean=false;
msg:string=''
   names:any=[];
   course:any=[];
   courseTitle:string='';
   courseDescription:string='';
   enrolled:boolean=false;

  constructor(private fb: FormBuilder, private studentService: StudentService,private router:Router,private authService:AuthService
    ) { 
    this.searchInput = fb.group({
      search : ['', Validators.required]
    })
  }
  enroll(user:any){
    const data =this.authService.isLoggedIn();
    const studentId= (data as any).decodedToken.user._id;
    const userId= user.userId
    const firstName=user.firstName
    console.log(studentId,userId,firstName)
    this.studentService.sendEnrollment(studentId,userId,firstName,this.courseTitle).subscribe(res => {
      console.log(res.success)
      this.router.navigate(['/enrollment'])
      if(res.success ==false){
    this.enrolled=true;
      }else{
        this.enrolled=false;

      }
    })

  }
  search(){
  const input = this.searchInput.controls['search'].value;
  console.log(input)
  this.studentService.getTeachers(input).subscribe(res => {
    console.log(res)
    const r=res.data;
    console.log(r.length)
    if(Object.keys(r).length===0){
      console.log("errr")
      this.msg='No courses Available';
      this.searchInput.reset()
      this.router.navigate(['/search'])
      return;
    }
    this.msg="";
    this.courseTitle = res.data[0].courseTitle
    this.courseDescription = res.data[0].courseDescription
    this.names=res.user

    res.user

 });
}
showdesc(){
  this.show=!this.show
}

}
