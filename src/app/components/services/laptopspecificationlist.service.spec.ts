import { TestBed } from '@angular/core/testing';

import { LaptopspecificationlistService } from './laptopspecificationlist.service';

describe('LaptopspecificationlistService', () => {
  let service: LaptopspecificationlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopspecificationlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
