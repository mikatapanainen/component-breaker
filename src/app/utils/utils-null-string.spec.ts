import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { doBreakTest, doBreakTestWithType, TestType } from './utils';
import { NullStringComponent } from '../null-string/null-string.component';

describe('utils NullStringComponent', () => {
  let component: NullStringComponent;
  let fixture: ComponentFixture<NullStringComponent>;
  let isErrors:boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NullStringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    isErrors = false;
    console.error = function () {
        isErrors = true;
    }

    fixture = TestBed.createComponent(NullStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async(() => {
    expect(isErrors).toBe(true);
  }));

  it('doBreakTest', async(() => {
    doBreakTest(fixture);
  }));

  it('doBreakTestWithType', async(() => {
    doBreakTestWithType(fixture, TestType.BUTTON_CLICKS, [], []);
  }));
});
