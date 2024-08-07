import { TestBed } from '@angular/core/testing';

import { ChecklistservicesService } from './checklistservices.service';

describe('ChecklistservicesService', () => {
  let service: ChecklistservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
