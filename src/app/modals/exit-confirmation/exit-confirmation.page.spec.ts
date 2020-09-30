import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitConfirmationPage } from './exit-confirmation.page';

describe('ExitConfirmationPage', () => {
  let component: ExitConfirmationPage;
  let fixture: ComponentFixture<ExitConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
