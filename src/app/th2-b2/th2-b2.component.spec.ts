import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th2B2Component } from './th2-b2.component';

describe('Th2B2Component', () => {
  let component: Th2B2Component;
  let fixture: ComponentFixture<Th2B2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th2B2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th2B2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
