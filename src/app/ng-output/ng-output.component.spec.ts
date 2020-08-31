import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOutputComponent } from './ng-output.component';

describe('NgOutputComponent', () => {
  let component: NgOutputComponent;
  let fixture: ComponentFixture<NgOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
