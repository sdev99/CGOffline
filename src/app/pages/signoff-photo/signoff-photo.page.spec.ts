import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignoffPhotoPage } from './signoff-photo.page';

describe('SignoffPhotoPage', () => {
  let component: SignoffPhotoPage;
  let fixture: ComponentFixture<SignoffPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoffPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignoffPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
