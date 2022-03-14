import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../../environments/environment";

const API_URL = `${env.apiBaseUrl}/api/teacher/course`;

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  addCourse({ }) : Observable<Object> {
    return this.http.post(`${API_URL}`, {});
  }

  listCourse() : Observable<Object> {
    return this.http.get(`${API_URL}`);
  }
  getCourse(course_id: string) {
    return this.http.get(`${API_URL}/${course_id}`);
  }

  updateJob(course_id: string, { }) : Observable<Object> {
    return this.http.patch(`${API_URL}/${course_id}`, { });
  }

}