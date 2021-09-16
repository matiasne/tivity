import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListReservasClientePage } from './list-reservas-cliente.page';

describe('ListReservasClientePage', () => {
  let component: ListReservasClientePage;
  let fixture: ComponentFixture<ListReservasClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservasClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListReservasClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
