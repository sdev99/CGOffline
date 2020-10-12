import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopnavigationsSegmentsDmComponent } from './topnavigations-segments-dm.component';

describe('TopnavigationsSegmentsDmComponent', () => {
  let component: TopnavigationsSegmentsDmComponent;
  let fixture: ComponentFixture<TopnavigationsSegmentsDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigationsSegmentsDmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopnavigationsSegmentsDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
