import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCustomPage } from './form-custom.page';

describe('FormCustomPage', () => {
  let component: FormCustomPage;
  let fixture: ComponentFixture<FormCustomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCustomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
