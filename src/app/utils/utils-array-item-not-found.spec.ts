import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { doBreakTest, doBreakTestWithType, TestType } from './utils';
import { FormsModule } from '@angular/forms';
import { ArrayItemNotFoundComponent } from '../array-item-not-found/array-item-not-found.component';

describe('utils ArrayItemNotFoundComponent', () => {
  let component: ArrayItemNotFoundComponent;
  let fixture: ComponentFixture<ArrayItemNotFoundComponent>;
  let isErrors:boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayItemNotFoundComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    isErrors = false;
    console.error = function () {
        isErrors = true;
    }

    fixture = TestBed.createComponent(ArrayItemNotFoundComponent);
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
    doBreakTestWithType(fixture, TestType.NUMBER_INPUTS, ['2'], []);
  }));
});
