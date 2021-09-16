import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormSubdivisionPage } from './form-subdivision.page';

describe('FormSubdivisionPage', () => {
  let component: FormSubdivisionPage;
  let fixture: ComponentFixture<FormSubdivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubdivisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormSubdivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
