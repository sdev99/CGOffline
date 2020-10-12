import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermitsDmPage } from './permits-dm.page';

describe('PermitsDmPage', () => {
  let component: PermitsDmPage;
  let fixture: ComponentFixture<PermitsDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitsDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermitsDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
