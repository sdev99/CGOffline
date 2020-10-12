import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentOpenchoiceDmPage } from './document-openchoice-dm.page';

describe('DocumentOpenchoiceDmPage', () => {
  let component: DocumentOpenchoiceDmPage;
  let fixture: ComponentFixture<DocumentOpenchoiceDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentOpenchoiceDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentOpenchoiceDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
