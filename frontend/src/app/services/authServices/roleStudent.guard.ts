import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleStudentGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data=  this.authService.isLoggedIn();
      console.log((data as any).decodedToken.user.role);
      if(data == true || data.isExpired == true){
        this.router.navigate(['/']);
        return false;
      }else if(data.decodedToken.user.role == "STUDENT"){
          return true;
      }else{
        this.router.navigate(['/']);
           return false;
      }  }

    //   if(data == true || data.isExpired == true){
    //    this.router.navigate(['/']);
    //    return false;
    //  }else if((data as any).decodedToken.user.role === "Student"){
    //   this.router.navigate(['search']);

    //      return true;
    //  }else{
    //       return false;
    //  }  
    // 
  }
  

