import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikaComponent } from './mika.component';

describe('MikaComponentComponent', () => {
  let component: MikaComponent;
  let fixture: ComponentFixture<MikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MikaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('press the button', () => {
    let isErrors = false;

    console.error = function() {
      isErrors = true;
    }

    expect(isErrors).toBe(false);

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(isErrors).toBe(false);
  });
});
