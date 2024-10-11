import { TestBed } from '@angular/core/testing';

import { DevelopertoollistService } from './developertoollist.service';

describe('DevelopertoollistService', () => {
  let service: DevelopertoollistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopertoollistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
