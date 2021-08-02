import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardReservasPage } from './dashboard-reservas.page';

describe('DashboardReservasPage', () => {
  let component: DashboardReservasPage;
  let fixture: ComponentFixture<DashboardReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardReservasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
