import { TestBed } from '@angular/core/testing';

import { ServerapiService } from './serverapi.service';

describe('ServerapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerapiService = TestBed.get(ServerapiService);
    expect(service).toBeTruthy();
  });
});
