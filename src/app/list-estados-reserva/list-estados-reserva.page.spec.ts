import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListEstadosReservaPage } from './list-estados-reserva.page';

describe('ListEstadosReservaPage', () => {
  let component: ListEstadosReservaPage;
  let fixture: ComponentFixture<ListEstadosReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEstadosReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListEstadosReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
