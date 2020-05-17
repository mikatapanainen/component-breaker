import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayItemNotFoundWrongKeyTypeComponent } from './array-item-not-found-wrong-key-type.component';

describe('ArrayItemNotFoundWrongKeyTypeComponent', () => {
  let component: ArrayItemNotFoundWrongKeyTypeComponent;
  let fixture: ComponentFixture<ArrayItemNotFoundWrongKeyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayItemNotFoundWrongKeyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayItemNotFoundWrongKeyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
