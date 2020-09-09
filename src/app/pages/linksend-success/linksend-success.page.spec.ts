import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinksendSuccessPage } from './linksend-success.page';

describe('LinksendSuccessPage', () => {
  let component: LinksendSuccessPage;
  let fixture: ComponentFixture<LinksendSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksendSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinksendSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
