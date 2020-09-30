import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextPrevToolbarComponent } from './next-prev-toolbar.component';

describe('NextPrevToolbarComponent', () => {
  let component: NextPrevToolbarComponent;
  let fixture: ComponentFixture<NextPrevToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPrevToolbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextPrevToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
