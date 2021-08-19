import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPersonalPage } from './select-personal.page';

describe('SelectPersonalPage', () => {
  let component: SelectPersonalPage;
  let fixture: ComponentFixture<SelectPersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPersonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
