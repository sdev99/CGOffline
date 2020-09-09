import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinFailPage } from './checkin-fail.page';

describe('CheckinFailPage', () => {
  let component: CheckinFailPage;
  let fixture: ComponentFixture<CheckinFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
