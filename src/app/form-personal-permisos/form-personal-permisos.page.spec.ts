import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormPersonalPermisosPage } from './form-personal-permisos.page';

describe('FormPersonalPermisosPage', () => {
  let component: FormPersonalPermisosPage;
  let fixture: ComponentFixture<FormPersonalPermisosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonalPermisosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPersonalPermisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
