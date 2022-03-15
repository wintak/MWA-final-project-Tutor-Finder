import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/authServices/auth.service';
import { store } from '../../../reducers/store';
import { authActions } from 'src/app/actions/authAction';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginform: FormGroup;
  load: boolean = false;
  msg:string='';

  private subscription: Subscription | undefined;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
    private authActions: authActions) {
    this.loginform = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'passWord': ['', Validators.required],


    });

    
  }
  ngOnInit(): void {
    console.log(store.getState());
  }
  onSubmit() {
    const { email, passWord } = this.loginform.value;
     this.load=true;
    this.authService.loginUser(email, passWord).subscribe((data) => {
      if( (data as any)[0] ){
        this.msg=(data as any)[0].msg
        this.load=false;

        return

      }

      if ((data as any).success) {
        
        this.load=false;
         this.authService.storeInSession((data as any).token, (data as any).data);
         const user =this.authService.isLoggedIn();
         const userId= (user as any).decodedToken.user.role;
        console.log(userId)
        if(userId=="TEACHER"){
          this.router.navigate(['tutor'])

        }else if(userId=="STUDENT"){
          this.router.navigate(['search'])
       return;
        }

      } else if (!(data as any).success) {
        this.load=false;

        this.msg= (data as any).msg;
        this.router.navigate(['/signin'])
      } else {
     
   
        // this.router.navigate(['/signin'])
        this.load=false;

      }
    
   }
    )
  }



}
