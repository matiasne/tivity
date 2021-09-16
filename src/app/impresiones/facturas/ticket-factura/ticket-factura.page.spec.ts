import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketFacturaPage } from './ticket-factura.page';

describe('TicketFacturaPage', () => {
  let component: TicketFacturaPage;
  let fixture: ComponentFixture<TicketFacturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFacturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
