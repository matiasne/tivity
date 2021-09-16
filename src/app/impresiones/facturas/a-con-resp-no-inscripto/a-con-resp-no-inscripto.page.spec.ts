import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AConRespNoInscriptoPage } from './a-con-resp-no-inscripto.page';

describe('AConRespNoInscriptoPage', () => {
  let component: AConRespNoInscriptoPage;
  let fixture: ComponentFixture<AConRespNoInscriptoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AConRespNoInscriptoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AConRespNoInscriptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
