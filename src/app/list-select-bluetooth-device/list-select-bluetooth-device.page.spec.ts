import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSelectBluetoothDevicePage } from './list-select-bluetooth-device.page';

describe('ListSelectBluetoothDevicePage', () => {
  let component: ListSelectBluetoothDevicePage;
  let fixture: ComponentFixture<ListSelectBluetoothDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSelectBluetoothDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSelectBluetoothDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
