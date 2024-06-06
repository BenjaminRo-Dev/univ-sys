import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteNavbarComponent } from './docente-navbar.component';

describe('DocenteNavbarComponent', () => {
  let component: DocenteNavbarComponent;
  let fixture: ComponentFixture<DocenteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocenteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
