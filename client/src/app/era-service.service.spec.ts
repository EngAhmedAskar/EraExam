import { TestBed } from '@angular/core/testing';

import { EraServiceService } from './era-service.service';

describe('EraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EraServiceService = TestBed.get(EraServiceService);
    expect(service).toBeTruthy();
  });
});
