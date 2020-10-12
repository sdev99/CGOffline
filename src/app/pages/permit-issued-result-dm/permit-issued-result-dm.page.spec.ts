import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermitIssuedResultDmPage } from './permit-issued-result-dm.page';

describe('PermitIssuedResultDmPage', () => {
  let component: PermitIssuedResultDmPage;
  let fixture: ComponentFixture<PermitIssuedResultDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitIssuedResultDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermitIssuedResultDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
