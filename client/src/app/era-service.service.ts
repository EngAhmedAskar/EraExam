import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';



@Injectable({
  providedIn: 'root'
})
export class EraServiceService {

  constructor(private httpClient: HttpClient) {


  }
  getQuestions(): Observable<string> {
    return this.httpClient

      .get('/questions')
      .pipe(
        map((body: any) => JSON.stringify(body)),
        catchError(() => of('Error, could not load Questions :-('))
      );
  }
  addQuestion(Q: object): Observable<string> {
    return this.httpClient
      .post('/questions', Q)
      .pipe(
        map((body: any) => body),
        catchError((err) => of('Error, could not Add Question :-(' + err))
      );
  }
  updateQuestion(Q: object, id: String): Observable<string> {
     console.log(Q);
     console.log(id);
     const url = '/questions/'+id;
     console.log(url);
     const httpOptions = {
      // headers: new HttpHeaders({ [{'Content-Type': 'application/json'}] }),
      
    };
    return this.httpClient
      .patch(url, Q ,httpOptions )
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not update Question :-('))
      );
  }
  
}
