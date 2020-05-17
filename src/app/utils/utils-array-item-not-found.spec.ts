import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak, isBreakWithType, TestType } from './utils';
import { FormsModule } from '@angular/forms';
import { ArrayItemNotFoundComponent } from '../array-item-not-found/array-item-not-found.component';

describe('utils ArrayItemNotFoundComponent', () => {
  let component: ArrayItemNotFoundComponent;
  let fixture: ComponentFixture<ArrayItemNotFoundComponent>;

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
    fixture = TestBed.createComponent(ArrayItemNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('isBreak', () => {
    expect(isBreak(fixture)).toBeTrue();
  });

  it('isBreakWithType', () => {
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    expect(isBreakWithType(fixture, TestType.NUMBER_INPUTS, isErrors, ['2'], [])).toBeTrue();
  });
});
