import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDivisionPage } from './select-division.page';

describe('SelectDivisionPage', () => {
  let component: SelectDivisionPage;
  let fixture: ComponentFixture<SelectDivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDivisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
