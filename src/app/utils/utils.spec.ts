import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak } from './utils';

import { NullStringComponent } from '../null-string/null-string.component';

describe('utils', () => {
  let component1: NullStringComponent;
  let fixture1: ComponentFixture<NullStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NullStringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture1 = TestBed.createComponent(NullStringComponent);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();
  });

  it('NullStringComponent', () => {
    expect(isBreak(fixture1.debugElement.nativeElement)).toBeTrue();
  });
});
