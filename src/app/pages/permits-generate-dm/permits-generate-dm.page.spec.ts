import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermitsGenerateDmPage } from './permits-generate-dm.page';

describe('PermitsGenerateDmPage', () => {
  let component: PermitsGenerateDmPage;
  let fixture: ComponentFixture<PermitsGenerateDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitsGenerateDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermitsGenerateDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
