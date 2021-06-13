import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAfipPage } from './form-afip.page';

describe('FormAfipPage', () => {
  let component: FormAfipPage;
  let fixture: ComponentFixture<FormAfipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAfipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAfipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
