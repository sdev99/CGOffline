import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserpairingPage } from './browserpairing.page';

describe('BrowserpairingPage', () => {
  let component: BrowserpairingPage;
  let fixture: ComponentFixture<BrowserpairingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserpairingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserpairingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
