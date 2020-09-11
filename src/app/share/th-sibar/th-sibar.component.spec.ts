import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThSibarComponent } from './th-sibar.component';

describe('ThSibarComponent', () => {
  let component: ThSibarComponent;
  let fixture: ComponentFixture<ThSibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThSibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThSibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
