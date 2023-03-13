import { TestBed } from '@angular/core/testing';

import { DeliveggieServiceService } from './deliveggie-service.service';

describe('DeliveggieServiceService', () => {
  let service: DeliveggieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveggieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
