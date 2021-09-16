import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormConfiguracionPage } from './form-configuracion.page';

describe('FormConfiguracionPage', () => {
  let component: FormConfiguracionPage;
  let fixture: ComponentFixture<FormConfiguracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfiguracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
