import { TestBed } from '@angular/core/testing';

import { SmallServiceService } from './small-service.service';

describe('SmallServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmallServiceService = TestBed.get(SmallServiceService);
    expect(service).toBeTruthy();
  });
});
