import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th2B1Component } from './th2-b1.component';

describe('Th2B1Component', () => {
  let component: Th2B1Component;
  let fixture: ComponentFixture<Th2B1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th2B1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th2B1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
