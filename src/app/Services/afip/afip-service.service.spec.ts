import { TestBed } from '@angular/core/testing';

import { AfipServiceService } from './afip-service.service';

describe('AfipServiceService', () => {
  let service: AfipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
