import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringToNumberFieldComponentComponent } from './string-to-number-field-component.component';

describe('StringToNumberFieldComponentComponent', () => {
  let component: StringToNumberFieldComponentComponent;
  let fixture: ComponentFixture<StringToNumberFieldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringToNumberFieldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringToNumberFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
