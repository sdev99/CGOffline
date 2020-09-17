import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinInductionImageFilePage } from './checkin-induction-image-file.page';

describe('CheckinInductionImageFilePage', () => {
  let component: CheckinInductionImageFilePage;
  let fixture: ComponentFixture<CheckinInductionImageFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinInductionImageFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinInductionImageFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
