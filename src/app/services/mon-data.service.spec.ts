import { TestBed } from '@angular/core/testing';

import { MonDataService } from './mon-data.service';

describe('MonDataService', () => {
  let service: MonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
