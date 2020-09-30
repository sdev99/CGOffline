import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardDmPage } from './dashboard-dm.page';

describe('DashboardDmPage', () => {
  let component: DashboardDmPage;
  let fixture: ComponentFixture<DashboardDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
