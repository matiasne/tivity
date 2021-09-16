import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoContactoPage } from './info-contacto.page';

describe('InfoContactoPage', () => {
  let component: InfoContactoPage;
  let fixture: ComponentFixture<InfoContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContactoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
