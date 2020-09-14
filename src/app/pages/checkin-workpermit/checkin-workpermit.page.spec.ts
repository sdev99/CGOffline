import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinWorkpermitPage } from './checkin-workpermit.page';

describe('CheckinWorkpermitPage', () => {
  let component: CheckinWorkpermitPage;
  let fixture: ComponentFixture<CheckinWorkpermitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinWorkpermitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinWorkpermitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
