import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormConfigMercadopagoPage } from './form-config-mercadopago.page';

describe('FormConfigMercadopagoPage', () => {
  let component: FormConfigMercadopagoPage;
  let fixture: ComponentFixture<FormConfigMercadopagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfigMercadopagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormConfigMercadopagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
