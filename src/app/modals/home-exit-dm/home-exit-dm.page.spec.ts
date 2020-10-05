import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeExitDmPage } from './home-exit-dm.page';

describe('HomeExitDmPage', () => {
  let component: HomeExitDmPage;
  let fixture: ComponentFixture<HomeExitDmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExitDmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExitDmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
