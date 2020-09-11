import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBt2Component } from './footer-bt2.component';

describe('FooterBt2Component', () => {
  let component: FooterBt2Component;
  let fixture: ComponentFixture<FooterBt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
