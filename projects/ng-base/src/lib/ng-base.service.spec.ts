import { TestBed } from '@angular/core/testing';

import { NgBaseService } from './ng-base.service';

describe('NgBaseService', () => {
  let service: NgBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
