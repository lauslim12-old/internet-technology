import { TestBed } from '@angular/core/testing';

import { SistempenggunaService } from './sistempengguna.service';

describe('SistempenggunaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistempenggunaService = TestBed.get(SistempenggunaService);
    expect(service).toBeTruthy();
  });
});
