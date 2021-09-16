import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormEstadoReservaPage } from './form-estado-reserva.page';

describe('FormEstadoReservaPage', () => {
  let component: FormEstadoReservaPage;
  let fixture: ComponentFixture<FormEstadoReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstadoReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormEstadoReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
