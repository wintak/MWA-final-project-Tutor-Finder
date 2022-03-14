import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import  {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
//allcourses
export class CoursesService {

  constructor(private httpClient: HttpClient) { } 

  getCourses() {
    return this.httpClient.get(`${environment.apiBaseUrl}/api/courses/allcourses`);
  }
}
