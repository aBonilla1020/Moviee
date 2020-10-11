import { TestBed } from '@angular/core/testing';

import { GetFilmsService } from './get-films.service';

describe('GetFilmsService', () => {
  let service: GetFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
