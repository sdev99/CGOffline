import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutGuestPhoneDmPage } from './checkinout-guest-phone-dm.page';

describe('CheckinoutPhoneDmPage', () => {
  let component: CheckinoutGuestPhoneDmPage;
  let fixture: ComponentFixture<CheckinoutGuestPhoneDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutGuestPhoneDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutGuestPhoneDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
