import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvacuationDmPage } from './evacuation-dm.page';

describe('EvacuationDmPage', () => {
  let component: EvacuationDmPage;
  let fixture: ComponentFixture<EvacuationDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvacuationDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
