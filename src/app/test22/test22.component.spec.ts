import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test22Component } from './test22.component';

describe('Test22Component', () => {
  let component: Test22Component;
  let fixture: ComponentFixture<Test22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
