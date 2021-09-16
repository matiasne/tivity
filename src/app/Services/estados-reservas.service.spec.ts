import { TestBed } from '@angular/core/testing';

import { EstadosReservasService } from './estados-reservas.service';

describe('EstadosReservasService', () => {
  let service: EstadosReservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosReservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
