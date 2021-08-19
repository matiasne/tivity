import { TestBed } from '@angular/core/testing';

import { EscanerCodigoBarraService } from './escaner-codigo-barra.service';

describe('EscanerCodigoBarraService', () => {
  let service: EscanerCodigoBarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscanerCodigoBarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
