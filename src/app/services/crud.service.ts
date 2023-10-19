import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = 'http://localhost:8080/api/employees';
  
  // users!: string;
   constructor( private http: HttpClient) { }
   signup(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
  getEmployees(): Observable<any[]>{
    return this.http.get<any>(this.baseUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
  // update(data:any):Observable<any>{
  //   return this.http.put<any>('${this.baseUrl}/${data.id}')
  // }
  // delete(id:number): Observable<void[]>{
  //   return this.http.delete<void>('${this.baseUrl}/${id}');
  // }





