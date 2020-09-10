import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardQrscanPage } from './dashboard-qrscan.page';

describe('DashboardQrscanPage', () => {
  let component: DashboardQrscanPage;
  let fixture: ComponentFixture<DashboardQrscanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardQrscanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardQrscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
