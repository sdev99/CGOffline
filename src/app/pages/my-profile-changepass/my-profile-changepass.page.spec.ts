import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProfileChangepassPage } from './my-profile-changepass.page';

describe('MyProfileChangepassPage', () => {
  let component: MyProfileChangepassPage;
  let fixture: ComponentFixture<MyProfileChangepassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileChangepassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProfileChangepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
