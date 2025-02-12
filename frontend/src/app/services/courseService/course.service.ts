import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../../environments/environment";

const API_URL = `${env.apiBaseUrl}/api/teacher`;

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  listCourse() : Observable<Object> {
    return this.http.get(`${API_URL}`);
  }
  listEnrolled() : Observable<Object> {
    return this.http.get(`${API_URL}/view`);
  }

  addCourse({ }) : Observable<Object> {
    return this.http.post(`${API_URL}/add`, {});
  }
 
  editCourse(course_id: string, { }) : Observable<Object> {
    return this.http.patch(`${API_URL}/edit`, { });
  }
  deleteCourse(course_id: string, { }) : Observable<Object> {
    return this.http.delete(`${API_URL}/delete`, { });
  }


}