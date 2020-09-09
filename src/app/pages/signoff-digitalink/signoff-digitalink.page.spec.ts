import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignoffDigitalinkPage } from './signoff-digitalink.page';

describe('SignoffDigitalinkPage', () => {
  let component: SignoffDigitalinkPage;
  let fixture: ComponentFixture<SignoffDigitalinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoffDigitalinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignoffDigitalinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
