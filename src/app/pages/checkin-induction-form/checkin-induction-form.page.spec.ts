import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinInductionFormPage } from './checkin-induction-form.page';

describe('CheckinInductionFormPage', () => {
  let component: CheckinInductionFormPage;
  let fixture: ComponentFixture<CheckinInductionFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinInductionFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinInductionFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
