import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private httpClient: HttpClient) { }
  getAdmission(): Observable<string> {
    return this.httpClient
      .get('/users')
      .pipe(
        map((body: any) => JSON.stringify(body)),
        catchError(() => of('Error, could not load admission :-('))
      );
  }
  addAdmission(Q: object): Observable<string> {
    console.log(Q);
    return this.httpClient
      .post('/users', Q)
      .pipe(
        map((body: any) => body),
        catchError((err) => of('Error, could not Add Admission :-(' + err))
      );
  }
  updateAdmission(Q: object, id: String): Observable<string> {
     console.log(Q);
     console.log(id);
     const url = '/users/'+id;
     console.log(url);
     const httpOptions = {
      // headers: new HttpHeaders({ [{'Content-Type': 'application/json'}] }),
      
    };
    return this.httpClient
      .patch(url, Q ,httpOptions )
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not update Admission :-('))
      );
  }



}
