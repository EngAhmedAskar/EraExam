import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger, I18nService, AuthenticationService, ExamService } from '@app/core';

const log = new Logger('ExamGuard');

@Injectable()
export class ExamGuard implements CanActivate {

  constructor(private router: Router,
              private examService: ExamService,
              private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting...');
    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

}
