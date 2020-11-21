import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinpadPage } from './pinpad.page';

describe('PinpadPage', () => {
  let component: PinpadPage;
  let fixture: ComponentFixture<PinpadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinpadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinpadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
