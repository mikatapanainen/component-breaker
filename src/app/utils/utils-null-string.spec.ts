import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak, doBreakTestWithType, TestType } from './utils';
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

  it('isBreak', () => {
    expect(isBreak(fixture)).toBeTrue();
  });

  it('isBreakWithType', () => {
    let isErrors:boolean = false;

    console.error = function () {
        isErrors = true;
    }

    doBreakTestWithType(fixture, TestType.BUTTON_CLICKS, [], []);
    expect(isErrors).toBeTrue();
  });
});
