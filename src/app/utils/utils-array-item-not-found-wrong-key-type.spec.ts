import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak, doBreakTestWithType, TestType } from './utils';
import { FormsModule } from '@angular/forms';
import { ArrayItemNotFoundWrongKeyTypeComponent } from '../array-item-not-found-wrong-key-type/array-item-not-found-wrong-key-type.component';

describe('utils ArrayItemNotFoundWrongKeyTypeComponent', () => {
  let component: ArrayItemNotFoundWrongKeyTypeComponent;
  let fixture: ComponentFixture<ArrayItemNotFoundWrongKeyTypeComponent>;

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
    fixture = TestBed.createComponent(ArrayItemNotFoundWrongKeyTypeComponent);
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

    doBreakTestWithType(fixture, TestType.STRING_INPUTS, [], ['a']);
    expect(isErrors).toBeTrue();
  });
});
