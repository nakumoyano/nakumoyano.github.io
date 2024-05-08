import { TestBed } from '@angular/core/testing';

import { GalenosHonorariosService } from './galenos-honorarios.service';

describe('GalenosService', () => {
  let service: GalenosHonorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalenosHonorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
