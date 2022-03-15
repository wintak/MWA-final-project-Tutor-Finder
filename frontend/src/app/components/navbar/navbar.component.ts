import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authServices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed:boolean=true;
  userRole:string='';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    const data =this.authService.isLoggedIn();
    const user =this.authService.isLoggedIn();

    if(data == true){
      return false;
    }else if(data.isExpired ==false){
      // this. userRole= (user as any).decodedToken.user.role;
      // console.log(this.userRole)
        return true;
    }else{
         return false;
    }
   }
   logout(){
     if (this.authService.logout()==null){
       this.router.navigate(['/signin'])
     }else{
 
     }
   }

toggleNavbarCollapsing() {
  this.navbarCollapsed = !this.navbarCollapsed

   return  this.navbarCollapsed ;
}
togglNavbarCollapsing() {

   return  this.navbarCollapsed ;
}

}
