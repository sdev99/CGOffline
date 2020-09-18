import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAccountSetupPage } from './new-account-setup.page';

describe('NewAccountSetupPage', () => {
  let component: NewAccountSetupPage;
  let fixture: ComponentFixture<NewAccountSetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountSetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAccountSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
