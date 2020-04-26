import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test21Component } from './test21.component';

describe('Test21Component', () => {
  let component: Test21Component;
  let fixture: ComponentFixture<Test21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
