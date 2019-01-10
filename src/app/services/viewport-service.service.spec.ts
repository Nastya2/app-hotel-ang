import { TestBed } from '@angular/core/testing';

import { ViewportServiceService } from './viewport-service.service';

describe('ViewportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewportServiceService = TestBed.get(ViewportServiceService);
    expect(service).toBeTruthy();
  });
});
