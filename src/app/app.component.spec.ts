import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { OkComponent } from './ok/ok.component';
import { NullStringComponent } from './null-string/null-string.component';
import { ArrayItemNotFoundComponent } from './array-item-not-found/array-item-not-found.component';
import { ArrayItemNotFoundWrongKeyTypeComponent } from './array-item-not-found-wrong-key-type/array-item-not-found-wrong-key-type.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule
      ],
      declarations: [
        AppComponent, OkComponent, NullStringComponent, ArrayItemNotFoundComponent, ArrayItemNotFoundWrongKeyTypeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mika-angular-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('component-breaker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('The component breaker application');
  });
});
