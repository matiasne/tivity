import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CConConsumidorFinalPage } from './c-con-consumidor-final.page';

describe('CConConsumidorFinalPage', () => {
  let component: CConConsumidorFinalPage;
  let fixture: ComponentFixture<CConConsumidorFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConConsumidorFinalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CConConsumidorFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
