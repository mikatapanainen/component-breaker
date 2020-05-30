import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { doBreakTest } from './utils';
import { FormsModule } from '@angular/forms';
import { OkComponent } from '../ok/ok.component';

describe('utils OkComponent', () => {
  let component: OkComponent;
  let fixture: ComponentFixture<OkComponent>;
  let isErrors:boolean;

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
    isErrors = false;
    console.error = function () {
        isErrors = true;
    }

    fixture = TestBed.createComponent(OkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async(() => {
    expect(isErrors).toBe(false);
  }));

  it('doBreakTest', async() => {
    doBreakTest(fixture);
  });
});
