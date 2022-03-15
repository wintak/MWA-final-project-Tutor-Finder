import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient){}

  jwtDataGenerate():any {
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

  getTeachers(input: any): Observable<any> {
    return this.http.get(this.API_URL + '/api/teacher/search/' + input);
  }

  sendEnrollment(courseId:any): Observable<any> {
    const data = this.jwtDataGenerate();
    const student = data._id;
    const body = {courseId, student}
    return this.http.post(this.API_URL + '/students', body)
  }

  courseList(): Observable<any> {
    const data = this.jwtDataGenerate();
    const student = data._id;
    return this.http.get(this.API_URL + '/students/' + student);
  }

  removeCourse(courseId: any): Observable<any> {
    const data = this.jwtDataGenerate();
    const student = data._id;
    return this.http.delete(this.API_URL + '/students/' + student + '/' + courseId)
  }

}
