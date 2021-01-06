import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomIonRefreshLoaderComponent } from './custom-ion-refresh-loader.component';

describe('CustomIonRefreshLoaderComponent', () => {
  let component: CustomIonRefreshLoaderComponent;
  let fixture: ComponentFixture<CustomIonRefreshLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIonRefreshLoaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIonRefreshLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
