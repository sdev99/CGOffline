import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnotationPreviewPage } from './annotation-preview.page';

describe('AnnotationPreviewPage', () => {
  let component: AnnotationPreviewPage;
  let fixture: ComponentFixture<AnnotationPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnotationPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
