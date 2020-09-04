import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TH1Component } from './th1.component';

describe('TH1Component', () => {
  let component: TH1Component;
  let fixture: ComponentFixture<TH1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TH1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
