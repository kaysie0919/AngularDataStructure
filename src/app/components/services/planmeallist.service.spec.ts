import { TestBed } from '@angular/core/testing';

import { PlanmeallistService } from './planmeallist.service';

describe('PlanmeallistService', () => {
  let service: PlanmeallistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanmeallistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
