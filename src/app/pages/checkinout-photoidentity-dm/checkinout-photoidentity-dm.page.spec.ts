import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutPhotoidentityDmPage } from './checkinout-photoidentity-dm.page';

describe('CheckinoutPhotoidentityDmPage', () => {
  let component: CheckinoutPhotoidentityDmPage;
  let fixture: ComponentFixture<CheckinoutPhotoidentityDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutPhotoidentityDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutPhotoidentityDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
