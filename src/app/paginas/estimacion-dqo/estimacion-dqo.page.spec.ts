import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstimacionDQOPage } from './estimacion-dqo.page';

describe('EstimacionDQOPage', () => {
  let component: EstimacionDQOPage;
  let fixture: ComponentFixture<EstimacionDQOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimacionDQOPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimacionDQOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
