import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak } from './utils';

import { Test1Component } from '../test1/test1.component';

describe('utils', () => {
  let component1: Test1Component;
  let fixture1: ComponentFixture<Test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture1 = TestBed.createComponent(Test1Component);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();
  });

  it('Test1Component', () => {
    expect(isBreak(fixture1.debugElement.nativeElement)).toBeTrue();
  });
});
