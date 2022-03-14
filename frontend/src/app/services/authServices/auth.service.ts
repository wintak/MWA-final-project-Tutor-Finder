import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import  {environment} from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  constructor(private httpClient: HttpClient) { } 
  
  registerUser(user: Object) {
    console.log(user);
   console.log(`${environment.apiBaseUrl}/api/users/signup`);
   
    return this.httpClient.post(`${environment.apiBaseUrl}/api/users/signup`, user);

  }
  loginUser(email: string, passWord: string) {
    return this.httpClient.post(`${environment.apiBaseUrl}/api/users/signin`, { email, passWord });
  }
  storeInSession(token: any, user: any) {

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify((user)));

    this.authToken = token;
    this.user = user
  }

  isLoggedIn() {
    let token: any = localStorage.getItem('token')
    if (token == null) return  true;

    token = token.split(' ')[1];

    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    const data = {isExpired,decodedToken}
    return data;
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return this.authToken;
  }

  verifyEmail(email: String) {
    return this.httpClient.get(`${environment.apiBaseUrl}/api/users/verify/${email}`);

  }

}



