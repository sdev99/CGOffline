import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutNameDmPage } from './checkinout-name-dm.page';

describe('CheckinoutNameDmPage', () => {
  let component: CheckinoutNameDmPage;
  let fixture: ComponentFixture<CheckinoutNameDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutNameDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutNameDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
