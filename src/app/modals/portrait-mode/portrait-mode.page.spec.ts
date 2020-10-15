import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortraitModePage } from './portrait-mode.page';

describe('PortraitModePage', () => {
  let component: PortraitModePage;
  let fixture: ComponentFixture<PortraitModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortraitModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
