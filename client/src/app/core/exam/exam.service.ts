import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (e: string) => `/exams/${e}`
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
<<<<<<< HEAD
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

=======
      .cache()
      .get(routes.quote(context.token))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  updateExam(exam: Object): Observable<string> {
    return this.httpClient
      .cache()
      .patch('/exams', exam)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not update Exam :-('))
      );
  }
  // submitExam(context: TokenQuestion, exam: Object): Observable<string> {
  //   return this.httpClient
  //     .cache()
  //     .patch("/exams", exam)
  //     .pipe(
  //       map((body: any) => body),
  //       catchError(() => of("Error, could not update Exam :-("))
  //     );
  // }

  submitExam(exam: Object): Promise<any> {
    console.log(exam);
    return this.httpClient.patch('/exams', exam).toPromise();
  }
  // getByToken(context: TokenQuestion): Promise<any> {
  //   return this.httpClient.get(routes.quote(context.token)).toPromise();
  // }
>>>>>>> 3f3afdf4ce1ccbb468f95eed69c5cbb16afc187c
}
