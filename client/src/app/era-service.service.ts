import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
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
        map((body: any) => JSON.stringify( body)),
        catchError(() => of('Error, could not load Questions :-('))
      );
  }
  addQuestion(Q : object): Observable<string> {
    return this.httpClient
      .cache()
      .post('/questions',Q)
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load Questions :-('))
      );
  }
  updateQuestion(Q : object,id:String): Observable<string> {
    return this.httpClient
      .cache()
      .put('/questions/'+id,Q)
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load Questions :-('))
      );
  }
}
