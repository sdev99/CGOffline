import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutIdentityconfirmDmPage } from './checkinout-identityconfirm-dm.page';

describe('CheckinoutIdentityconfirmDmPage', () => {
  let component: CheckinoutIdentityconfirmDmPage;
  let fixture: ComponentFixture<CheckinoutIdentityconfirmDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutIdentityconfirmDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutIdentityconfirmDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
