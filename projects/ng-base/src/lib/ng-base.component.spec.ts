import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBaseComponent } from './ng-base.component';

describe('NgBaseComponent', () => {
  let component: NgBaseComponent;
  let fixture: ComponentFixture<NgBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
