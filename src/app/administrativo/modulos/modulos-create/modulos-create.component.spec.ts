import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosCreateComponent } from './modulos-create.component';

describe('ModulosCreateComponent', () => {
  let component: ModulosCreateComponent;
  let fixture: ComponentFixture<ModulosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
