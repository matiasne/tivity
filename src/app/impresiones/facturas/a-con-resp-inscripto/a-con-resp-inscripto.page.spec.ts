import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AConRespInscriptoPage } from './a-con-resp-inscripto.page';

describe('AConRespInscriptoPage', () => {
  let component: AConRespInscriptoPage;
  let fixture: ComponentFixture<AConRespInscriptoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AConRespInscriptoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AConRespInscriptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
