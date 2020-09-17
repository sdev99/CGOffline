import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAccidentReportPage } from './form-accident-report.page';

describe('FormAccidentReportPage', () => {
  let component: FormAccidentReportPage;
  let fixture: ComponentFixture<FormAccidentReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccidentReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAccidentReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
