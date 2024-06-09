import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasCreateComponent } from './carreras-create.component';

describe('CarrerasCreateComponent', () => {
  let component: CarrerasCreateComponent;
  let fixture: ComponentFixture<CarrerasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrerasCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrerasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
