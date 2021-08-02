import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCardPaymentPage } from './form-card-payment.page';

describe('FormCardPaymentPage', () => {
  let component: FormCardPaymentPage;
  let fixture: ComponentFixture<FormCardPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCardPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCardPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
