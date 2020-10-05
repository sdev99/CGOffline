import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentsDmPage } from './documents-dm.page';

describe('DocumentsDmPage', () => {
  let component: DocumentsDmPage;
  let fixture: ComponentFixture<DocumentsDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentsDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
