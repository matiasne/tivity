import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormConfiguracionAfipPage } from './form-configuracion-afip.page';

describe('FormConfiguracionAfipPage', () => {
  let component: FormConfiguracionAfipPage;
  let fixture: ComponentFixture<FormConfiguracionAfipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfiguracionAfipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormConfiguracionAfipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
