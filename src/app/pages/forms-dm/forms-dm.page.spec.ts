import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormsDmPage } from './forms-dm.page';

describe('FormsDmPage', () => {
  let component: FormsDmPage;
  let fixture: ComponentFixture<FormsDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
