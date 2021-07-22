import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormImpresoraPage } from './form-impresora.page';

describe('FormImpresoraPage', () => {
  let component: FormImpresoraPage;
  let fixture: ComponentFixture<FormImpresoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImpresoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormImpresoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
