import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormDivisionPage } from './form-division.page';

describe('FormDivisionPage', () => {
  let component: FormDivisionPage;
  let fixture: ComponentFixture<FormDivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDivisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormDivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
