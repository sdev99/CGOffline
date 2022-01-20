import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OktaAuthLogoutPage } from './okta-auth-logout.page';

describe('OktaAuthLogoutPage', () => {
  let component: OktaAuthLogoutPage;
  let fixture: ComponentFixture<OktaAuthLogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OktaAuthLogoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OktaAuthLogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
