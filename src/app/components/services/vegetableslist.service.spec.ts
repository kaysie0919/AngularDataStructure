import { TestBed } from '@angular/core/testing';

import { VegetableslistService } from './vegetableslist.service';

describe('VegetableslistService', () => {
  let service: VegetableslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetableslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
