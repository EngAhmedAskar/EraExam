import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: ( e: string) => `/resolve?token=${e}`
};

export interface TokenQuestion {
  // the token taked from url
  token: string;
}

export interface ListExams {
  name: string;
}

@Injectable()
export class ExamService {
  constructor(private httpClient: HttpClient) {}
  getByToken(context: TokenQuestion): Observable<ListExams> {
    return this.httpClient
            .cache()
            .get(routes.quote(context.token))
            .pipe(
              map((body: any) => body),
              catchError(() => of('Error, could not load exam :-('))
            );
  }
  getExams(): Observable<String> {
    return this.httpClient
            .cache()
            .get('/exams')
            .pipe(
              map((body: any) => body),
              catchError(() => of('Error, could not load Exams :-('))
            );
  }

}
