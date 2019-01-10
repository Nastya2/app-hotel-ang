import { TestBed } from '@angular/core/testing';

import { LargeServiceService } from './large-service.service';

describe('LargeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LargeServiceService = TestBed.get(LargeServiceService);
    expect(service).toBeTruthy();
  });
});
