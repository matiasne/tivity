import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BConConsumidorFinalPage } from './b-con-consumidor-final.page';

describe('BConConsumidorFinalPage', () => {
  let component: BConConsumidorFinalPage;
  let fixture: ComponentFixture<BConConsumidorFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BConConsumidorFinalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BConConsumidorFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
