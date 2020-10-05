import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutOptionDmPage } from './checkinout-option-dm.page';

describe('CheckinoutOptionDmPage', () => {
  let component: CheckinoutOptionDmPage;
  let fixture: ComponentFixture<CheckinoutOptionDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutOptionDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutOptionDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
