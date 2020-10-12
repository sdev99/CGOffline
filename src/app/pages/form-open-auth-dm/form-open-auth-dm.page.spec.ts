import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOpenAuthDmPage } from './form-open-auth-dm.page';

describe('FormOpenAuthDmPage', () => {
  let component: FormOpenAuthDmPage;
  let fixture: ComponentFixture<FormOpenAuthDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOpenAuthDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOpenAuthDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
