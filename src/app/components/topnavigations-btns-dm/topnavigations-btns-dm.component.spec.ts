import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopnavigationsBtnsDmComponent } from './topnavigations-btns-dm.component';

describe('TopnavigationsBtnsDmComponent', () => {
  let component: TopnavigationsBtnsDmComponent;
  let fixture: ComponentFixture<TopnavigationsBtnsDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigationsBtnsDmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopnavigationsBtnsDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
