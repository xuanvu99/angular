import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoi5Component } from './buoi5.component';

describe('Buoi5Component', () => {
  let component: Buoi5Component;
  let fixture: ComponentFixture<Buoi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buoi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buoi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
