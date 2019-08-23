import { TestBed } from '@angular/core/testing';

import { ApiRxService } from './api-rx.service';

describe('ApiRxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRxService = TestBed.get(ApiRxService);
    expect(service).toBeTruthy();
  });
});
