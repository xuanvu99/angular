import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServiceComponent } from './ng-service.component';

describe('NgServiceComponent', () => {
  let component: NgServiceComponent;
  let fixture: ComponentFixture<NgServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
