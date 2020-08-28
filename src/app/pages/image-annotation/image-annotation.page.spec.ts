import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageAnnotationPage } from './image-annotation.page';

describe('ImageAnnotationPage', () => {
  let component: ImageAnnotationPage;
  let fixture: ComponentFixture<ImageAnnotationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAnnotationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageAnnotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
