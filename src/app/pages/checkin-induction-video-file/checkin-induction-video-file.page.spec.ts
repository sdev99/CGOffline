import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinInductionVideoFilePage } from './checkin-induction-video-file.page';

describe('CheckinInductionVideoFilePage', () => {
  let component: CheckinInductionVideoFilePage;
  let fixture: ComponentFixture<CheckinInductionVideoFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinInductionVideoFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinInductionVideoFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
