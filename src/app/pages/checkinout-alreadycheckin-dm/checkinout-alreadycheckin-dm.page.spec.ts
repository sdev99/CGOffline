import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutAlreadycheckinDmPage } from './checkinout-alreadycheckin-dm.page';

describe('CheckinoutAlreadycheckinDmPage', () => {
  let component: CheckinoutAlreadycheckinDmPage;
  let fixture: ComponentFixture<CheckinoutAlreadycheckinDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutAlreadycheckinDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutAlreadycheckinDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
