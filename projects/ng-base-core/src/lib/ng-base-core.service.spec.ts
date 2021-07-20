import { TestBed } from '@angular/core/testing';
import { NgBaseCoreService } from './ng-base-core.service';

describe('NgBaseCoreService', () => {
  let service: NgBaseCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBaseCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
