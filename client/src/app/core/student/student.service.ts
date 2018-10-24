import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const routes = {
  quote: () =>  `/users/invitation`
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // retrive de status from the server

  constructor(private httpClient: HttpClient) { }

  sendInvitation(email: string ) {
    return this.httpClient
            .cache()
            .post(routes.quote(), {email: email})
            .pipe(
              map((body: any) => body),
              catchError(() => of('Error, could not load joke :-('))
            );
  }

}
