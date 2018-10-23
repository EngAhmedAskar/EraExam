import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private httpClient: HttpClient) { }

  sendInvitation(email: String): Observable<string> {
    return this.httpClient
      .cache()
      .post('/invitation',email)
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error,Can\'t send Invitation :-('))
      );
  }
}
