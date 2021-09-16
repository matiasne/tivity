import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPedidosClientePage } from './list-pedidos-cliente.page';

describe('ListPedidosClientePage', () => {
  let component: ListPedidosClientePage;
  let fixture: ComponentFixture<ListPedidosClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPedidosClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPedidosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
