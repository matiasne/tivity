import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormCardTokenPage } from './form-card-token.page';

describe('FormCardTokenPage', () => {
  let component: FormCardTokenPage;
  let fixture: ComponentFixture<FormCardTokenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCardTokenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCardTokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
