import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCoverPage } from './form-cover.page';

describe('FormCoverPage', () => {
  let component: FormCoverPage;
  let fixture: ComponentFixture<FormCoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
