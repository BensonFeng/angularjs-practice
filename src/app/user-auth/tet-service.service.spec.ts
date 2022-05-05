import { TestBed } from '@angular/core/testing';

import { TetServiceService } from './tet-service.service';

describe('TetServiceService', () => {
  let service: TetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
