import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentCheckinPage } from './current-checkin.page';

describe('CurrentCheckinPage', () => {
  let component: CurrentCheckinPage;
  let fixture: ComponentFixture<CurrentCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCheckinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
