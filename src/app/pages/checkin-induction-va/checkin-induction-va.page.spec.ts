import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinInductionVaPage } from './checkin-induction-va.page';

describe('CheckinInductionVaPage', () => {
  let component: CheckinInductionVaPage;
  let fixture: ComponentFixture<CheckinInductionVaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinInductionVaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinInductionVaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
