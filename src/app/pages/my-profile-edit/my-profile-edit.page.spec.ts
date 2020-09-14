import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProfileEditPage } from './my-profile-edit.page';

describe('MyProfileEditPage', () => {
  let component: MyProfileEditPage;
  let fixture: ComponentFixture<MyProfileEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProfileEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
