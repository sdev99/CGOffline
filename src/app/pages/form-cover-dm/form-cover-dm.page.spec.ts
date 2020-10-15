import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCoverDmPage } from './form-cover-dm.page';

describe('FormCoverDmPage', () => {
  let component: FormCoverDmPage;
  let fixture: ComponentFixture<FormCoverDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCoverDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCoverDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
