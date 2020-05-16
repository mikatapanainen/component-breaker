import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak } from './utils';

import { NullStringComponent } from '../null-string/null-string.component';

describe('utils NullStringComponent', () => {
  let component: NullStringComponent;
  let fixture: ComponentFixture<NullStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NullStringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('NullStringComponent', () => {
    expect(isBreak(fixture)).toBeTrue();
  });
});
