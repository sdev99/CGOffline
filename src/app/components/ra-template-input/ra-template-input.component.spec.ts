import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaTemplateInputComponent } from './ra-template-input.component';

describe('RaTemplateInputComponent', () => {
  let component: RaTemplateInputComponent;
  let fixture: ComponentFixture<RaTemplateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaTemplateInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaTemplateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
