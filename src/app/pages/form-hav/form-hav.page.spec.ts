import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormHavPage } from './form-hav.page';

describe('FormHavPage', () => {
  let component: FormHavPage;
  let fixture: ComponentFixture<FormHavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormHavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
