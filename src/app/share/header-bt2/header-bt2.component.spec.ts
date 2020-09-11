import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBt2Component } from './header-bt2.component';

describe('HeaderBt2Component', () => {
  let component: HeaderBt2Component;
  let fixture: ComponentFixture<HeaderBt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
