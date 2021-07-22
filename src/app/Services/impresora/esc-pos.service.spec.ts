import { TestBed } from '@angular/core/testing';

import { EscPosService } from './esc-pos.service';

describe('EscPosService', () => {
  let service: EscPosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscPosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
