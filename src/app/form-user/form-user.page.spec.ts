import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormUserPage } from './form-user.page';

describe('FormUserPage', () => {
  let component: FormUserPage;
  let fixture: ComponentFixture<FormUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
