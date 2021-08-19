import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormImportarCatalogoCsvPage } from './form-importar-catalogo-csv.page';

describe('FormImportarCatalogoCsvPage', () => {
  let component: FormImportarCatalogoCsvPage;
  let fixture: ComponentFixture<FormImportarCatalogoCsvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImportarCatalogoCsvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormImportarCatalogoCsvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
