import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isBreak } from './utils';
import { FormsModule } from '@angular/forms';
import { OkComponent } from '../ok/ok.component';

describe('utils NullStringComponent', () => {
  let component: OkComponent;
  let fixture: ComponentFixture<OkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OkComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('OkComponent', () => {
    expect(isBreak(fixture)).toBeFalse();
  });
});