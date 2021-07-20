import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBaseCoreComponent } from './ng-base-core.component';

describe('NgBaseCoreComponent', () => {
  let component: NgBaseCoreComponent;
  let fixture: ComponentFixture<NgBaseCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBaseCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBaseCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
