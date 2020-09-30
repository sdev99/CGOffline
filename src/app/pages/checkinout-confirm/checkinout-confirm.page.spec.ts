import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutConfirmPage } from './checkinout-confirm.page';

describe('CheckoutConfirmPage', () => {
  let component: CheckinoutConfirmPage;
  let fixture: ComponentFixture<CheckinoutConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
