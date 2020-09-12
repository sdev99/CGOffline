import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormRiskassessmentPage } from './form-riskassessment.page';

describe('FormRiskassessmentPage', () => {
  let component: FormRiskassessmentPage;
  let fixture: ComponentFixture<FormRiskassessmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRiskassessmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormRiskassessmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
