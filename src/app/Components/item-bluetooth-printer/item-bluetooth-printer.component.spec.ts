import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemBluetoothPrinterComponent } from './item-bluetooth-printer.component';

describe('ItemBluetoothPrinterComponent', () => {
  let component: ItemBluetoothPrinterComponent;
  let fixture: ComponentFixture<ItemBluetoothPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBluetoothPrinterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBluetoothPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
