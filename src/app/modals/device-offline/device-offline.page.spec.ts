import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceOfflinePage } from './device-offline.page';

describe('DeviceOfflinePage', () => {
  let component: DeviceOfflinePage;
  let fixture: ComponentFixture<DeviceOfflinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceOfflinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceOfflinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
