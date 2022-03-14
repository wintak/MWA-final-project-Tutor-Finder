import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable, of } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.method == 'post'){
            req.headers.append('Content-Type','application/json');   
        }
        const idToken = localStorage.getItem("token");
  
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                      idToken)
            });
             console.log("from Interceptor" + req.headers);
            return next.handle(cloned);
        }
        else {
            return next.handle(req).pipe(
                catchError((error: HttpErrorResponse) => {
                  if (error.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error('An error occurred:', error.error.message);
                  } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
                  }
                  console.error(`Backend returned code ${error.status}, body was: ${error.error}`);

                  // If you want to return a new response:
                  return of(new HttpResponse({body: [{msg: "check your connection",error:error.status}]}));
          
                  // If you want to return the error on the upper level:
                  //return throwError(error);
          
                  // or just return nothing:
                  return EMPTY;
                })
              );
        }
    }
}