import { TestBed } from '@angular/core/testing';

import { AuditsservicesService } from './auditsservices.service';

describe('AuditsservicesService', () => {
  let service: AuditsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
