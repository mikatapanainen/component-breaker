import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullStringComponent } from './null-string.component';

describe('NullStringComponent', () => {
  let component: NullStringComponent;
  let fixture: ComponentFixture<NullStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
