import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const routes = {
  quote: (email: string) =>  `sendInvitation/email=${email}`
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // retrive de status from the server

  constructor(private httpClient: HttpClient) { }


  sendInvitation(email: string ) {
    console.log(email);
    return this.httpClient
            .cache()
            .get(routes.quote(email))
            .pipe(
              map((body: any) => body),
              catchError(() => of('Error, could not load joke :-('))
            );
  }

}
