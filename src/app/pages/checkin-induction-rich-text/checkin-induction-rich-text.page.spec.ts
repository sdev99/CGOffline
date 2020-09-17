import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinInductionRichTextPage } from './checkin-induction-rich-text.page';

describe('CheckinInductionRichTextPage', () => {
  let component: CheckinInductionRichTextPage;
  let fixture: ComponentFixture<CheckinInductionRichTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinInductionRichTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinInductionRichTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
