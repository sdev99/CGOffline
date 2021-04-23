import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FolderContentListPage } from './folder-content-list.page';

describe('FolderContentListPage', () => {
  let component: FolderContentListPage;
  let fixture: ComponentFixture<FolderContentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderContentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FolderContentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
