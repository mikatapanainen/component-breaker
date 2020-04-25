import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { doBreakTest } from './utils';

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

  it('Do the break test', () => {
    doBreakTest(fixture.debugElement.nativeElement);
  });
});
