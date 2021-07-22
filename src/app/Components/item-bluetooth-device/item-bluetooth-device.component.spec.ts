import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemBluetoothDeviceComponent } from './item-bluetooth-device.component';

describe('ItemBluetoothDeviceComponent', () => {
  let component: ItemBluetoothDeviceComponent;
  let fixture: ComponentFixture<ItemBluetoothDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBluetoothDeviceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBluetoothDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
