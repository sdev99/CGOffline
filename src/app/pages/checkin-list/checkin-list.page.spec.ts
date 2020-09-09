import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinListPage } from './checkin-list.page';

describe('CheckinListPage', () => {
  let component: CheckinListPage;
  let fixture: ComponentFixture<CheckinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
