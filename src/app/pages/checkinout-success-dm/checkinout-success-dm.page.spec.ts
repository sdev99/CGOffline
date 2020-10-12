import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinoutSuccessDmPage } from './checkinout-success-dm.page';

describe('CheckinoutSuccessDmPage', () => {
  let component: CheckinoutSuccessDmPage;
  let fixture: ComponentFixture<CheckinoutSuccessDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinoutSuccessDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinoutSuccessDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
