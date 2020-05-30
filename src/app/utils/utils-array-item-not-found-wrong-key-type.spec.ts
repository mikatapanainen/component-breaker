import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { doBreakTest, doBreakTestWithType, TestType } from './utils';
import { FormsModule } from '@angular/forms';
import { ArrayItemNotFoundWrongKeyTypeComponent } from '../array-item-not-found-wrong-key-type/array-item-not-found-wrong-key-type.component';

describe('utils ArrayItemNotFoundWrongKeyTypeComponent', () => {
  let component: ArrayItemNotFoundWrongKeyTypeComponent;
  let fixture: ComponentFixture<ArrayItemNotFoundWrongKeyTypeComponent>;
  let isErrors:boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayItemNotFoundWrongKeyTypeComponent],
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

    fixture = TestBed.createComponent(ArrayItemNotFoundWrongKeyTypeComponent);
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
    doBreakTestWithType(fixture, TestType.STRING_INPUTS, [], ['a']);
  }));
});
