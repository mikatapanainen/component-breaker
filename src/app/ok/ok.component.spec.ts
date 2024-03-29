import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OkComponent } from './ok.component';

describe('OkComponent', () => {
  let component: OkComponent;
  let fixture: ComponentFixture<OkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkComponent ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work when button pressed', () => {
    const nativeElement = fixture.nativeElement;
    nativeElement.querySelectorAll('button')[0].click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('p').textContent).toBe('3');
  });
});
